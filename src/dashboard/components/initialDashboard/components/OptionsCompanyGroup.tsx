import { InvitationFromCompany } from "./form/InvitationFromCompany";
import { OptionCompany } from "./OptionCompany";
import career from "./../images/Career.png";
import asynchronousWork from "./../images/Career.png";

export const OptionsCompanyGroup = () => {
  return (
    <div className="grid gap-5 justify-center mt-10">
      <OptionCompany
        image={career}
        title="Crear empresa"
        description="Inicia tu propia empresa y gestiona tu equipo con nuestras herramientas avanzadas."
      >
        <button>ddd</button>
      </OptionCompany>
      <OptionCompany
        image={asynchronousWork}
        title="Unirse a una Empresa"
        description="Ingresa a una empresa existente como empleado"
      >
        <InvitationFromCompany />
      </OptionCompany>
    </div>
  );
};
