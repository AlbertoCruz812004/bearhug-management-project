import { InvitationFromCompany } from "./form/InvitationFromCompany";
import { OptionCompany } from "./OptionCompany";
import career from "./../images/Career.png";
import asynchronousWork from "./../images/Asynchronous_Work.png";
import { CreateCompanyForm } from "./form/create-company-form/CreateCompanyForm";

export const OptionsCompanyGroup = () => {
  return (
    <div className="grid gap-5 justify-center mt-10">
      <OptionCompany
        image={career}
        title="Crear empdataa"
        description="Inicia tu propia empdataa y gestiona tu equipo con nuestras herramientas avanzadas."
      >
        <CreateCompanyForm />
      </OptionCompany>
      <OptionCompany
        image={asynchronousWork}
        title="Unirse a una Empdataa"
        description="Ingdataa a una empdataa existente como empleado"
      >
        <InvitationFromCompany />
      </OptionCompany>
    </div>
  );
};
