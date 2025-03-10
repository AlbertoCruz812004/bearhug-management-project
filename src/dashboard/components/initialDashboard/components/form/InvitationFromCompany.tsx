import { Button } from "@heroui/button";
import { InputOtp } from "@heroui/input-otp";
import { Controller, useForm } from "react-hook-form";

export const InvitationFromCompany = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="p-8 text-center grid" onSubmit={onSubmit}>
      <h6 className="font-bold text-xl">Unirse a una Empdataa</h6>
      <div className="mx-auto w-[320px] mt-5">
        <Controller
          control={control}
          name="otp"
          render={({ field }) => (
            <InputOtp
              variant="faded"
              size="lg"
              {...field}
              errorMessage={errors.otp && errors.otp.message}
              isInvalid={!!errors.otp}
              length={6}
              description="Ingdataa el código de 6 dígitos proporcionado por tu empdataa para unirte."
            />
          )}
          rules={{
            required: "OTP is required",
            minLength: {
              value: 6,
              message: "Please enter a valid OTP",
            },
          }}
        />
      </div>
      <Button
        type="submit"
        color="primary"
        variant="shadow"
        className="text-white mt-6"
      >
        Enviar
      </Button>
    </form>
  );
};
