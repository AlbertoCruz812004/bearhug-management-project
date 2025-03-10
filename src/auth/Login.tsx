import logo from "./../../public/logo.png";
import {Button} from "@heroui/button";
import AuthLayout from "./layout/AuthLayout";
import image from "./images/Authentication.png";
import {Bar, DarkModeButton} from "../core/components";
import {signInWithEmail} from "./services/auth.service";
import {FormValues} from "./components/form/model/form_schema";
import {useNavigate} from "react-router";
import {Link} from "@heroui/link";

export default function Login() {
    const navigate = useNavigate();

    const login = (data: FormValues) => {
        signInWithEmail(data.email, data.password).then((dataponse) => {
            if (dataponse.error) {
                console.log("auth error", dataponse.error);
            } else {
                console.log("auth dataponse", dataponse.data);
                navigate("/app/initial");
            }
        });
    };

    return (
        <>
            <Bar image={logo}>
                <Button
                    as={Link}
                    href="/auth/signup"
                    size="sm"
                    color="primary"
                    variant="ghost"
                >
                    registrate
                </Button>
                <DarkModeButton/>
            </Bar>
            <AuthLayout service={login} title="Inicia Sesión" image={image}/>
        </>
    );
}
