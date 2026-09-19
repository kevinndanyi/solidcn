import type { Component, JSX } from 'solid-js'
import {
  createMemo,
  createSignal,
  For,
  splitProps,
} from 'solid-js'
import { cx } from '@solidcn/cx'

import './calendar.scss'

export interface CalendarProps
  extends Omit<
    JSX.HTMLAttributes<HTMLDivElement>,
    'onSelect'
  > {
  class?: string
  value?: Date
  defaultValue?: Date
  onSelect?: (date: Date) => void
  minDate?: Date
  maxDate?: Date
  disabled?: (date: Date) => boolean
  
}

const WEEKDAYS = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
]

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const startOfDay = (date: Date) => {
  const result = new Date(date)
  result.setHours(0, 0, 0, 0)
  return result
}

const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate()

const isBefore = (a: Date, b: Date) =>
  startOfDay(a).getTime() <
  startOfDay(b).getTime()

const isAfter = (a: Date, b: Date) =>
  startOfDay(a).getTime() >
  startOfDay(b).getTime()

const formatMonth = (date: Date) =>
  `${MONTHS[date.getMonth()]} ${date.getFullYear()}`

const createMonthDays = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth()

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)

  const days: Date[] = []

  const previousMonthDays =
    firstDay.getDay()

  for (
    let index = previousMonthDays;
    index > 0;
    index--
  ) {
    days.push(
      new Date(
        year,
        month,
        1 - index,
      ),
    )
  }

  for (
    let day = 1;
    day <= lastDay.getDate();
    day++
  ) {
    days.push(
      new Date(year, month, day),
    )
  }

  const remaining = 42 - days.length

  for (
    let day = 1;
    day <= remaining;
    day++
  ) {
    days.push(
      new Date(
        year,
        month + 1,
        day,
      ),
    )
  }

  return days
}

export const Calendar: Component<
  CalendarProps
> = (props) => {
  const [local, rest] = splitProps(props, [
    'class',
    'value',
    'defaultValue',
    'onSelect',
    'minDate',
    'maxDate',
    'disabled',
  ])

  const today = startOfDay(new Date())

  const initialDate =
    local.value ??
    local.defaultValue ??
    today

  const [internalValue, setInternalValue] =
    createSignal<Date | undefined>(
      local.defaultValue,
    )

  const selectedDate = createMemo(
    () => local.value ?? internalValue(),
  )

  const [month, setMonth] = createSignal(
    new Date(
      initialDate.getFullYear(),
      initialDate.getMonth(),
      1,
    ),
  )

  const days = createMemo(() =>
    createMonthDays(month()),
  )

  const isDisabled = (date: Date) => {
    if (
      local.minDate &&
      isBefore(date, local.minDate)
    ) {
      return true
    }

    if (
      local.maxDate &&
      isAfter(date, local.maxDate)
    ) {
      return true
    }

    return local.disabled?.(date) ?? false
  }

  const selectDate = (date: Date) => {
    if (isDisabled(date)) return

    setInternalValue(date)
    local.onSelect?.(date)
  }

  const previousMonth = () => {
    setMonth(
      (current) =>
        new Date(
          current.getFullYear(),
          current.getMonth() - 1,
          1,
        ),
    )
  }

  const nextMonth = () => {
    setMonth(
      (current) =>
        new Date(
          current.getFullYear(),
          current.getMonth() + 1,
          1,
        ),
    )
  }

  const goToToday = () => {
    setMonth(
      new Date(
        today.getFullYear(),
        today.getMonth(),
        1,
      ),
    )

    if (!isDisabled(today)) {
      selectDate(today)
    }
  }

  const focusDate = (date: Date) => {
    const timestamp = date.getTime()

    requestAnimationFrame(() => {
      const calendar =
        document.querySelector(
          '.scn-calendar',
        )

      const button =
        calendar?.querySelector<HTMLButtonElement>(
          `[data-timestamp="${timestamp}"]`,
        )

      button?.focus()
    })
  }

  const handleKeyDown: JSX.EventHandler<
    HTMLButtonElement,
    KeyboardEvent
  > = (event) => {
    const currentDate = new Date(
      Number(
        event.currentTarget.dataset.timestamp,
      ),
    )

    const nextDate = new Date(currentDate)

    switch (event.key) {
      case 'ArrowLeft':
        nextDate.setDate(
          nextDate.getDate() - 1,
        )
        break

      case 'ArrowRight':
        nextDate.setDate(
          nextDate.getDate() + 1,
        )
        break

      case 'ArrowUp':
        nextDate.setDate(
          nextDate.getDate() - 7,
        )
        break

      case 'ArrowDown':
        nextDate.setDate(
          nextDate.getDate() + 7,
        )
        break

      case 'Home':
        nextDate.setDate(
          nextDate.getDate() -
          nextDate.getDay(),
        )
        break

      case 'End':
        nextDate.setDate(
          nextDate.getDate() +
          (6 - nextDate.getDay()),
        )
        break

      case 'PageUp':
        nextDate.setMonth(
          nextDate.getMonth() - 1,
        )
        break

      case 'PageDown':
        nextDate.setMonth(
          nextDate.getMonth() + 1,
        )
        break

      case 'Enter':
      case ' ':
        event.preventDefault()
        selectDate(currentDate)
        return

      default:
        return
    }

    event.preventDefault()

    if (isDisabled(nextDate)) {
      return
    }

    const targetMonth = new Date(
      nextDate.getFullYear(),
      nextDate.getMonth(),
      1,
    )

    const currentMonth = month()

    if (
      targetMonth.getFullYear() !==
      currentMonth.getFullYear() ||
      targetMonth.getMonth() !==
      currentMonth.getMonth()
    ) {
      setMonth(targetMonth)
    }

    focusDate(nextDate)
  }

  return (
    <div
      {...rest}
      class={cx(
        'scn-calendar',
        local.class,
      )}
    >
      <div class="scn-calendar__header">
        <button
          type="button"
          class="scn-calendar__nav"
          aria-label="Previous month"
          onClick={previousMonth}
        >
          ‹
        </button>

        <div
          class="scn-calendar__month"
          aria-live="polite"
        >
          {formatMonth(month())}
        </div>

        <button
          type="button"
          class="scn-calendar__nav"
          aria-label="Next month"
          onClick={nextMonth}
        >
          ›
        </button>
      </div>

      <div
        class="scn-calendar__weekdays"
        aria-hidden="true"
      >
        <For each={WEEKDAYS}>
          {(weekday) => (
            <span>{weekday}</span>
          )}
        </For>
      </div>

      <div
        class="scn-calendar__grid"
        role="grid"
        aria-label={formatMonth(month())}
      >
        <For each={days()}>
          {(date) => {
            const outsideMonth =
              date.getMonth() !==
              month().getMonth()

            const selected = () =>
              selectedDate()
                ? sameDay(
                  date,
                  selectedDate()!,
                )
                : false

            const isToday = sameDay(
              date,
              today,
            )

            const disabled =
              isDisabled(date)

            return (
              <button
                type="button"
                role="gridcell"
                data-timestamp={date.getTime()}
                aria-selected={selected()}
                aria-current={
                  isToday
                    ? 'date'
                    : undefined
                }
                aria-disabled={
                  disabled
                }
                disabled={disabled}
                tabindex={
                  selected() ||
                    (!selectedDate() &&
                      isToday)
                    ? 0
                    : -1
                }
                class={cx(
                  'scn-calendar__day',
                  outsideMonth &&
                  'scn-calendar__day--outside',
                  selected() &&
                  'scn-calendar__day--selected',
                  isToday &&
                  'scn-calendar__day--today',
                  disabled &&
                  'scn-calendar__day--disabled',
                )}
                onClick={() =>
                  selectDate(date)
                }
                onKeyDown={handleKeyDown}
              >
                {date.getDate()}
              </button>
            )
          }}
        </For>
      </div>

      <div class="scn-calendar__footer">
        <button
          type="button"
          class="scn-calendar__today"
          onClick={goToToday}
        >
          Today
        </button>
      </div>
    </div>
  )
}