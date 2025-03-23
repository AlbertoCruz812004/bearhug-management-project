import { Button } from "@heroui/button";
import { VerifiedEmail } from "./components/verified_email/VerifiedEmail.tsx";
import AuthLayout from "./layout/AuthLayout";
import logo from "./../../public/logo.png";
import image from "./images/Data Cloud.png";
import { signUpNewUser } from "./services/auth.service";
import { FormValues } from "./components/form/model/form_schema";
import { Bar, DarkModeButton } from "../core/components";
import { useState } from "react";
import { DataType } from "./interfaces/AuthResponse.ts";
import { Link } from "@heroui/link";

export default function SignUp() {
  const [sendEmail, setSendEmail] = useState(false);
  const [email, setEmail] = useState("");

  const signUp = (data: FormValues) => {
    setSendEmail(true);
    signUpNewUser(data.email, data.password)
      .then((dataponse) => {
        if (dataponse.error) {
          console.log(dataponse.error);
        } else {
          const dataResponse: DataType = dataponse.data;
          console.log(dataResponse);
          setEmail(dataResponse.user?.email ?? "username");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Bar image={logo}>
        <Button
          as={Link}
          href="/auth/login"
          size="sm"
          color="primary"
          variant="ghost"
        >
          inicia sesión
        </Button>
        <DarkModeButton />
      </Bar>
      <AuthLayout title="Registrate" image={image} service={signUp} />
      <VerifiedEmail isVerifiedEmail={sendEmail} username={email} />
    </>
  );
}
