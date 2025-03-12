import { Control, Controller, FieldError } from "react-hook-form"

interface Props {
  options: Array<{ value: string, text: string }>,
  control: Control<any>
  name: string
  error?: FieldError
}

export const FormSelect = ({ options, control, name, error }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <label className='grid'>
          <select  {...field} className={`p-2 text-sm rounded-xl border-2 border-primary-400 ${!!error ? "text-danger-400" : ""}`}>
            <option className='p-2 border-2 border-primary-400 w-5'>Selecciona una opcion</option>
            {options.map(item => (
              <option className='p-2 border-2 border-primary-400 w-5' key={item.text} value={item.value}>{item.text}</option>
            ))}
          </select>
          <span className='text-danger-400 text-[12px]'>{error?.message}</span>
        </label>
      )}
    />
  )
}
