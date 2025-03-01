import SectionContainer from "../../layout/SectionContainer";
import CardFeature from "./components/CardFeature";
import { FEATURES } from "./feature";
import { Icons } from "./icons";
import { motion } from "framer-motion";

export const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Anima los hijos con un pequeño retraso entre ellos
      },
    },
  };

  return (
    <SectionContainer
      bg="bg-gradient-pallet"
      textColor="text-white"
      title="¿Por qué elegir nuestro Gestor de Almacenes en la Nube?"
      description="Si aún no estás convencido, te mostramos los beneficios que obtendría tu negocio si te decides por nosotros."
    >
      <motion.div
        className="flex flex-wrap justify-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {FEATURES.map((feature, index) => (
          <CardFeature
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={Icons[index]()}
          />
        ))}
      </motion.div>
    </SectionContainer>
  );
};
