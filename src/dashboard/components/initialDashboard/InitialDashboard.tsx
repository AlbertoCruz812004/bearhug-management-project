import { Image } from "@heroui/image";
import chart from "./images/Chart.png";
import { OptionsCompanyGroup, Footer } from "./components/";
import { motion } from "framer-motion";

export const InitialDashboard = () => {
  return (
    <section className="flex px-4 items-center mt-3">
      <article>
        <h4 className="text-lg w-2/3 text-center mx-auto font-bold">
          ¿Listo para tu próximo gran proyecto? Elige tu camino: crea un negocio
          desde cero o únete a uno existente.
        </h4>
        <OptionsCompanyGroup />
        <Footer />
      </article>
      <motion.figure
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-full border-2 border-pallete-blue rounded-xl"
      >
        <Image src={chart} width={500} />
      </motion.figure>
    </section>
  );
};
