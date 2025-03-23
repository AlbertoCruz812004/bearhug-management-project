import { Button } from "@heroui/button";
import { useState, JSX } from "react";
import { motion } from "framer-motion";
import Modal from "../../../../core/components/Modal";
import { Image } from "@heroui/image";

interface Props {
  title: string;
  description: string;
  children: JSX.Element;
  image: string;
}

export const OptionCompany = ({
  title,
  description,
  children,
  image,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);

  return (
    <motion.article
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="flex items-center px-2 py-3 max-w-[500px] border-2 border-black dark:bg-zinc-800 rounded-lg gap-4"
    >
      <figure>
        <Image width={150} src={image} />
      </figure>
      <blockquote className="grid gap-2 w-2/3 p-2">
        <p className="text-sm">{description}</p>
        <Button onPress={handleClick} color="primary" variant="shadow">
          {title}
        </Button>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          {children}
        </Modal>
      </blockquote>
    </motion.article>
  );
};
