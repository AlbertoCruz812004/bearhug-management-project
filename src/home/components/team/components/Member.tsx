import { Image } from "@heroui/image";
import { FacebookIcon, GithubIcon, TwitterIcon } from "../../../icon";
import { motion } from "framer-motion";

interface Props {
  name: string;
  rol: string;
  description: string;
  photo: string;
  socialMediaUrl: string;
}

export const Member = ({
  name,
  rol,
  photo,
  socialMediaUrl,
  description,
}: Props) => {
  const variants = {
    hidden: { opacity: 0, scale: 0 }, // Antes de entrar en la vista
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 } }, // Animación al mostrarse
  };

  return (
    <motion.article
      className="inline-flex flex-col md:flex-row items-center p-4"
      initial="hidden" // Estado inicial (oculto)
      whileInView="visible" // Cambia a visible cuando entra en la vista
      viewport={{ once: true, amount: 0.2 }} // Control de cuándo inicia la animación
      variants={variants} // Asociamos las variantes
    >
      <figure>
        <Image
          radius="full"
          alt="name"
          src={photo}
          height={180}
          width={180}
          classNames={{
            img: "object-cover object-center",
          }}
        />
      </figure>
      <blockquote className="w-[250px] p-4 space-y-3">
        <div className="text-center md:text-left">
          <h6 className="font-bold text-blue-500">{name}</h6>
          <p className="text-gray-500">{rol}</p>
        </div>
        <p className="text-sm text-center">{description}</p>
        <ul className="flex gap-2 items-center justify-center md:justify-normal">
          <li>
            <a href={socialMediaUrl}>
              <GithubIcon />
            </a>
          </li>
          <li>
            <a href={socialMediaUrl}>
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href={socialMediaUrl}>
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </blockquote>
    </motion.article>
  );
};
