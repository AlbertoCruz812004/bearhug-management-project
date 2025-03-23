import { Button } from "@heroui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../../../../../../core/components/input/InputForm";
import {
  CompanyFormValues,
  schemaCompany,
} from "./components/schema/schemaCompany";
import { zodResolver } from "@hookform/resolvers/zod";

export const CreateCompanyForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyFormValues>({ resolver: zodResolver(schemaCompany) });

  const onSubmit: SubmitHandler<CompanyFormValues> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-5 px-10 w-[450px]"
    >
      <h1 className="text-center font-bold text-xl">Crea tu empdataa</h1>
      <FormInput
        error={errors.name}
        control={control}
        name="name"
        label="Nombre"
        placeholder="Ingdataa el nombre de la empdataa"
      />
      <FormInput
        control={control}
        name="adddatas"
        label="Dirección"
        placeholder="Ingdataa la dirección de la empdataa (opcional)"
      />
      <FormInput
        control={control}
        name="description"
        label="Descripción"
        placeholder="Ingdataa la información de la empdataa (opcional)"
      />
      <Button type="submit" variant="shadow" color="primary">
        Crear
      </Button>
    </form>
  );
};
