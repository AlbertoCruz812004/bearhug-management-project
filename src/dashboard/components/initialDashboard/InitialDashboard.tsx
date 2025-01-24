import { Bar, DarkModeButton } from "../../../core/components";
import { OptionCompany, InvitationFromCompany } from "./components/";
import { BuildingIcon, AddIcon } from "./icon/";
import image from "./../../../../public/logo.png";
import { User } from "@heroui/user";

export const InitialDashboard = () => {
  return (
    <section>
      <Bar image={image}>
        <User
          avatarProps={{
            src: "https://unavatar.io/github/mdo",
          }}
          description="Nuevo usuario"
          name="La bestia"
        />
      </Bar>
      <h4 className="text-3xl text-center font-bold">Bienvenido</h4>
      <article>
        <div className="w-full flex gap-16 justify-center mt-10">
          <OptionCompany
            title="Crear empresa"
            description="Crea tu propia empresa y conviértete en administrador"
            contentExtra="Inicia tu propia empresa y gestiona tu equipo con nuestras herramientas avanzadas."
            icon={<BuildingIcon />}
          >
            <button>ddd</button>
          </OptionCompany>
          <OptionCompany
            title="Unirse a una Empresa"
            description="Ingresa a una empresa existente como empleado"
            contentExtra="Únete a tu equipo ingresando el código único proporcionado por tu empresa."
            icon={<AddIcon />}
          >
            <InvitationFromCompany />
          </OptionCompany>
        </div>
      </article>
    </section>
  );
};
