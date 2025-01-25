import { Image } from "@heroui/image";
import { OptionCompany, InvitationFromCompany } from "./components/";
import company from "./images/Asynchronous_Work.png";
import career from "./images/Career.png";
import chart from "./images/Chart.png";
import { SupportIcon } from "./icon/SupportIcon";
import { FileIcon } from "./icon/FileIcon";

export const InitialDashboard = () => {
  return (
    <section className="flex px-4 items-center mt-3">
      <article>
        <h4 className="text-lg w-2/3 text-center mx-auto font-bold">
          "¿Listo para tu próximo gran proyecto? Elige tu camino: crea un
          negocio desde cero o únete a uno existente."
        </h4>
        <div className="grid gap-5 justify-center mt-10">
          <OptionCompany
            image={career}
            title="Crear empresa"
            description="Inicia tu propia empresa y gestiona tu equipo con nuestras herramientas avanzadas."
          >
            <button>ddd</button>
          </OptionCompany>
          <OptionCompany
            image={company}
            title="Unirse a una Empresa"
            description="Ingresa a una empresa existente como empleado"
          >
            <InvitationFromCompany />
          </OptionCompany>
        </div>

        <footer className="px-5 py-2 w-2/3 bg-gray-500 flex justify-between rounded-lg mx-auto mt-5">
          <span className="flex gap-2 text-white cursor-pointer">
            <SupportIcon />
            Preguntas frecuentes y soporte
          </span>
          <span className="flex gap-2 text-white cursor-pointer">
            <FileIcon />
            Terminos y Condiciones
          </span>
        </footer>
      </article>
      <figure className="h-full border-2 border-pallete-blue rounded-xl">
        <Image src={chart} width={500} />
      </figure>
    </section>
  );
};
