import { Label, Radio } from '@solidcn/ui'

export default function Test() {
    return (
        <div class="test-page">
            <div class="test-section">
                <Label>Choose a plan</Label>

                <div class="test-options">
                    <label class="test-option">
                        <Radio
                            name="plan"
                            value="free"
                        />
                        <span>Free</span>
                    </label>

                    <label class="test-option">
                        <Radio
                            name="plan"
                            value="pro"
                            checked
                        />
                        <span>Pro</span>
                    </label>

                    <label class="test-option">
                        <Radio
                            name="plan"
                            value="enterprise"
                        />
                        <span>Enterprise</span>
                    </label>
                </div>
            </div>

            <div class="test-section">
                <Label>Disabled option</Label>

                <label class="test-option">
                    <Radio
                        name="disabled-example"
                        value="disabled"
                        disabled
                    />
                    <span>Unavailable</span>
                </label>
            </div>
        </div>
    )
}