import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../../../../../core/components/input/InputForm";
import { productSchema, ProductValues } from "./schema/product.schema";
import { Button } from "@heroui/button";
import CheckboxForm from "../../../../../core/components/checkboxForm/CheckboxForm";

export const CreateProduct = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<
    ProductValues
  >({ resolver: zodResolver(productSchema) });

  const onSubmit: SubmitHandler<ProductValues> = data => {
    console.log(data);
  };

  const options = [
    { value: "unit", text: "por unidad" },
    { value: "grammage", text: "por gramos" },
    { value: "kit", text: "por kit" }
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-w-[600px] p-8 grid gap-5 max-h-[500px] overflow-y-auto scrollbar-hide"
    >
      <FormInput
        control={control}
        name="code"
        type="text"
        label="Código"
        placeholder="Ingdataa el codigo de producto"
        error={errors.code}
      />
      <FormInput
        control={control}
        name="name"
        type="text"
        label="Nombre"
        placeholder="Ingdataa nombre del producto"
        error={errors.name}
      />
      <CheckboxForm
        control={control}
        name="typeSell"
        options={options}
        error={errors.typeSell}
        label="Se vende por:"
      />
      <FormInput
        control={control}
        name="purchasePrice"
        type="text"
        label="Precio de costo"
        placeholder="Ingdataa el costo del producto"
        error={errors.purchasePrice}
      />
      <FormInput
        control={control}
        name="priceSale"
        type="text"
        label="Precio de venta"
        placeholder="Ingdataa el precio de venta"
        error={errors.priceSale}
      />
      <FormInput
        control={control}
        name="quantity"
        type="text"
        label="Existencia"
        placeholder="Cantidad del producto en existencia"
        error={errors.quantity}
      />
      <FormInput
        control={control}
        name="minQuantity"
        type="text"
        label="Existencia Minima"
        placeholder="Cantidad minima en existencia"
        error={errors.minQuantity}
      />
      <FormInput
        control={control}
        name="maxQuantity"
        type="text"
        label="Existencia Maxima"
        placeholder="Cantidad maxima en existencia"
        error={errors.maxQuantity}
      />
      <Button type="submit">Guardar</Button>
    </form>
  );
};
