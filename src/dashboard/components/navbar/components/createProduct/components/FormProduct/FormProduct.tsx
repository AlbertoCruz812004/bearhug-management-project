import { Button } from "@heroui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import CheckboxForm from "../../../../../../../core/components/checkboxForm/CheckboxForm";
import FormInput from "../../../../../../../core/components/input/InputForm";
import { ProductValues, productSchema } from "./schema/product.schema";
import { FormSelect } from "./components/FormSelect";
import { useEffect, useState } from "react";
import { searchCategory } from "../../insertProduct";

interface Props {
  eventForm: (product: ProductValues) => void;
}

export const FormProduct = ({ eventForm }: Props) => {
  const [categories, setCategories] = useState<
    Array<{ value: string; text: string }>
  >([]);
  const { control, handleSubmit, formState: { errors } } = useForm<
    ProductValues
  >({ resolver: zodResolver(productSchema) });

  const onSubmit: SubmitHandler<ProductValues> = data => {
    console.log(data);
    eventForm(data);
  };

  const options = [
    { value: "unit", text: "por unidad" },
    { value: "grammage", text: "por gramos" },
    { value: "kit", text: "por kit" }
  ];

  useEffect(() => {
    searchCategory().then(data => {
      console.log(data);
      setCategories(value => data);
    });
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[500px] h-[450px] grid gap-5 overflow-y-auto scrollbar-hide"
    >
      <FormInput
        control={control}
        name="code"
        type="text"
        label="Código"
        placeholder="Ingresa el codigo de producto"
        error={errors.code}
        maxLenght={15}
      />
      <FormInput
        control={control}
        name="name"
        type="text"
        label="Nombre"
        placeholder="Ingresa nombre del producto"
        error={errors.name}
        maxLenght={70}
      />
      <CheckboxForm
        control={control}
        name="typeSell"
        options={options}
        error={errors.typeSell}
        label="Se vende por:"
        defaultValue={options[0].value}
      />
      <FormInput
        control={control}
        name="purchasePrice"
        type="text"
        label="Precio de costo"
        placeholder="Ingresa el costo del producto"
        error={errors.purchasePrice}
      />
      <FormInput
        control={control}
        name="priceSale"
        type="text"
        label="Precio de venta"
        placeholder="Ingresa el precio de venta"
        error={errors.priceSale}
      />
      <FormSelect
        control={control}
        error={errors.category}
        name="category"
        options={categories}
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
      <Button color="primary" type="submit">
        Guardar
      </Button>
    </form>
  );
};
