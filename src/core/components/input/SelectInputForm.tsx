import { Select, SelectItem } from "@heroui/select"
import { Control, Controller, FieldError } from "react-hook-form"

interface props {
  control: Control<any>
  name: string
  label?: string,
  error?: FieldError
  options: string[]
  placeholder?: string
}

export const SelectInputForm = ({ control, name, label, error, options, placeholder }: props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          placeholder={placeholder}
          {...field}
          isInvalid={!!error}
          errorMessage={error?.message}
          labelPlacement="outside"
          label={label}
        >
          {
            options.map(item => (
              <SelectItem key={item}>{item}</SelectItem>
            ))
          }
        </Select>
      )}
    />
  )
}
