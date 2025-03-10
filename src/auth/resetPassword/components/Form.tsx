import { Input } from "@heroui/input";
import { FormEvent } from "react";
import { dataetPassword } from "../../services/auth.service";
import { Button } from "@heroui/button";

export const Form = () => {
  const handleSUbmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const password = event.currentTarget.password.value;

    if (password.length < 8) return;

    dataetPassword(password);
  };

  return (
    <form onSubmit={handleSUbmit} className="w-[300px] grid mx-auto gap-3">
      <Input
        type="password"
        label="Nueva contraseña"
        name="password"
        labelPlacement="outside"
        placeholder="Contraseña"
        radius="md"
        classNames={{
          inputWrapper: "border-2 border-blue-600 bg-transparent",
          innerWrapper: "bg-transparent",
        }}
      />
      <Button color="primary" className="font-bold text-md">
        Cambiar contraseña
      </Button>
    </form>
  );
};
