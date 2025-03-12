import { Radio, RadioGroup } from "@heroui/radio";
import { Control, Controller, FieldError } from "react-hook-form";

interface props {
  control: Control<any>
  name: string
  label: string,
  error?: FieldError
  defaultValue?: string,
  options: Array<{
    value: string,
    text: string
  }>
}

export default function CheckboxForm({ control, name, label, options, error, defaultValue }: props) {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <RadioGroup
            orientation="horizontal"
            {...field}
            label={label}
            defaultValue={defaultValue}
            errorMessage={error?.message}
            isInvalid={!!error}
          >
            {
              options.map(item => (
                <Radio value={item.value} key={item.text}>{item.text}</Radio>
              ))
            }
          </RadioGroup>
        )}
      />
    </div>
  )
}

