import { Input } from "@heroui/input";
import { FieldError } from "react-hook-form";

export interface InputProps {
  type?: "text" | "email" | "password" | "number";
  label: string;
  placeholder: string;
  error?: FieldError;
  field: any;
  minLenght?: number,
  maxLenght?: number
}

export const RenderInput = ({
  field,
  label,
  placeholder,
  error,
  type,
  maxLenght,
  minLenght
}: InputProps) => (
  <Input
    isInvalid={!!error}
    errorMessage={error?.message}
    {...field}
    type={type}
    labelPlacement="outside"
    radius="md"
    label={label}
    placeholder={placeholder}
    maxLength={maxLenght}
    minLength={minLenght}
    classNames={{
      inputWrapper: "border-2 border-blue-600 bg-transparent",
      innerWrapper: "bg-transparent",
    }}
  />
);
