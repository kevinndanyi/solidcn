import type { Component, JSX } from 'solid-js'
import {
  createSignal,
  Show,
  splitProps,
} from 'solid-js'
import { cx } from '@solidcn/cx'

import {
  Calendar,
} from '../calendar'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../popover'

import './date-picker.scss'

export interface DatePickerProps
  extends Omit<
    JSX.HTMLAttributes<HTMLDivElement>,
    'onChange'
  > {
  class?: string
  value?: Date
  defaultValue?: Date
  placeholder?: string
  onChange?: (date: Date | undefined) => void
  minDate?: Date
  maxDate?: Date
  disabled?: (date: Date) => boolean
}

export const DatePicker: Component<
  DatePickerProps
> = (props) => {
  const [local, rest] = splitProps(props, [
    'class',
    'children',
    'value',
    'defaultValue',
    'placeholder',
    'onChange',
    'minDate',
    'maxDate',
    'disabled',
  ])

  const [internalValue, setInternalValue] =
    createSignal<Date | undefined>(
      local.defaultValue,
    )

  const [open, setOpen] = createSignal(false)

  const selectedDate = () =>
    local.value !== undefined
      ? local.value
      : internalValue()

  const handleSelect = (date: Date) => {
    setInternalValue(date)
    local.onChange?.(date)
    setOpen(false)
  }

  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date)

  return (
    <div
      {...rest}
      class={cx(
        'scn-date-picker',
        local.class,
      )}
    >
      <Popover
        open={open()}
        onOpenChange={setOpen}
      >
        <PopoverTrigger
          class={cx(
            'scn-date-picker__trigger',
            !selectedDate() &&
            'scn-date-picker__trigger--placeholder',
          )}
        >
          <span
            aria-hidden="true"
            class="scn-date-picker__icon"
          >
            📅
          </span>

          <span>
            {selectedDate()
              ? formatDate(selectedDate()!)
              : local.placeholder ??
              'Select a date'}
          </span>
        </PopoverTrigger>

        <PopoverContent
          class="scn-date-picker__content"
        >
          <Calendar
            value={selectedDate()}
            onSelect={handleSelect}
            minDate={local.minDate}
            maxDate={local.maxDate}
            disabled={local.disabled}
          />
        </PopoverContent>
      </Popover>

      {local.children}
    </div>
  )
}