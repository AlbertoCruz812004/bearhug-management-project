import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Wave } from "./Wave";
import { motion } from "framer-motion";

interface Props {
  image: string;
}

export default function HeroImage({ image }: Props) {
  return (
    <main className="h-[90svh] mt-[10svh] flex justify-center items-center px-10 md:pt-8 gap-12">
      <Wave />
      <article className="w-[500px] text-center space-y-6">
        <motion.h1
          className="text-4xl font-bold text-blue-600"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.4,
          }}
        >
          Bienvenido a BEARHUG el mejor gestor de almacenes en la nube
        </motion.h1>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: -10 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          ¿Estás cansado de perder información importante debido a fallos en tus
          dispositivos o sistemas locales? ¡No te preocupes más! Nuestra
          aplicación de Gestión de Almacenes en la Nube está aquí para ayudarte.
        </motion.p>
        <motion.div
          className="flex justify-center gap-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            delay: 1.5,
          }}
        >
          <Button
            as={Link}
            href="/auth/signup"
            variant="shadow"
            color="primary"
            className="w-[150px]"
          >
            Registrate ahora
          </Button>

          <Button
            as={Link}
            href="/auth/login"
            variant="shadow"
            className="w-[150px] "
          >
            Inicia sesión
          </Button>
        </motion.div>
      </article>
      <motion.figure
        animate={{ y: -50, opacity: 1 }}
        initial={{ opacity: 0, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-[500px] hidden lg:block z-10"
      >
        <img className="object-cover object-center" src={image} alt="hero" />
      </motion.figure>
    </main>
  );
}
