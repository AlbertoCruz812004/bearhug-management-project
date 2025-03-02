import { Control, Controller } from "react-hook-form";
import { InputProps, RenderInput } from "./RenderInput";

interface ControllerProps {
  name: string;
  control: Control<any>;
}

type Props = ControllerProps & Omit<InputProps, "field">;

export default function FormInput({
  type,
  label,
  name,
  placeholder,
  error,
  control,
}: Props) {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <RenderInput
            field={field}
            label={label}
            placeholder={placeholder}
            error={error}
            type={type}
          />
        )}
      />
    </div>
  );
}
