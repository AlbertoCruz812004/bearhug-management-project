import { Bar, DarkModeButton } from "../../core/components";
import { Form } from "./components/Form";
import image from "./images/Password.png";

export default function ResetPassword() {
  return (
    <>
      <Bar>
        <DarkModeButton />
      </Bar>
      <h1 className="text-3xl font-bold text-center mt-10 mb-5">
        Restablece tu contraseña
      </h1>
      <Form />
      <figure className="w-[350px] md:w-[500px] mx-auto mt-5">
        <img
          src={image}
          alt="dataet password"
          className="object-cover object-center"
        />
      </figure>
    </>
  );
}
