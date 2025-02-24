import SectionContainer from "../../layout/SectionContainer";
import image from "./image/mockup2.png";

export const Video = () => {
  return (
    <SectionContainer
      title="BearHugManagement: Simplifica la Gestión de Almacenes en la Nube"
      description="Optimiza la operación de tu almacén con nuestra solución tecnológica avanzada."
    >
      <div className="flex flex-col md:flex-row gap-4 md:pt-20">
        <article>
          <h3 className="text-2xl font-bold text-center text-[#22d1ee] my-5">
            Optimiza tu Gestión de Almacenes con Nuestra Solución Inteligente
          </h3>
          <p className="mt-4 text-lg">
            <span className="font-bold text-[#22d1ee]">BearHugManagement</span>{" "}
            te ofrece una solución integral para supervisar, gestionar y
            optimizar tus almacenes. Con nuestra plataforma en la nube,
            puedes administrar tus operaciones de de manera más ágil, precisa y con un control total.
          </p>
          <p className="mt-4 text-lg">
            <span className="font-bold text-[#22d1ee]">
              Eleva la eficiencia
            </span>{" "}
            de tu negocio: nuestra herramienta de gestión te permite tener una
            visión clara de todos tus recursos y operaciones. Garantiza una gestión sin interrupciones, maximiza tu productividad y potencia los resultados de tu negocio.
          </p>
        </article>
        <figure className="max-w-[450px] mx-auto">
          <img
            src={image}
            alt="Gestión de almacenes"
            className="object-cover object-center rounded-lg"
          />
        </figure>
      </div>
    </SectionContainer>
  );
};
