import { Input } from "@heroui/input";
import { Control, Controller } from "react-hook-form";

interface Props {
  name: string;
  control: Control;
  placeholder: string;
  label: string;
  required?: boolean;
}
1;

export const InputForm = ({
  control,
  name,
  label,
  placeholder,
  required,
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          {...field}
          labelPlacement="outside"
          variant="faded"
          color="primary"
          label={label}
          placeholder={placeholder}
          required={required}
        />
      )}
    />
  );
};
