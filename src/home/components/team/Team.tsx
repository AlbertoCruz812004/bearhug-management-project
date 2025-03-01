import SectionContainer from "../../layout/SectionContainer";
import { Member } from "./components/Member";
import { profiles } from "./profiles";
import { motion } from "framer-motion";

export const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Anima los hijos con un pequeño retraso entre ellos
      },
    },
  };

  return (
    <SectionContainer
      title="Nuestro equipo"
      description="En BearHugManagement, nuestro éxito depende del talento y la pasión de nuestro equipo, quienes, con su experiencia e innovación, ofrecen soluciones excepcionales. Conoce a quienes lo hacen posible."
    >
      <motion.div
        className="flex flex-wrap justify-around"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {profiles.map((profile) => (
          <Member
            key={profile.name}
            name={profile.name}
            description={profile.biography}
            rol={profile.rol}
            photo={profile.photo}
            socialMediaUrl="#"
          />
        ))}
      </motion.div>
    </SectionContainer>
  );
};
