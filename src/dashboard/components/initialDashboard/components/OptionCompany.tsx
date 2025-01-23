import { Button } from "@heroui/button";
import { ReactNode, useState, JSX } from "react";
import { motion } from "framer-motion";
import Modal from "../../../../core/components/Modal";

interface Props {
  title: string;
  description: string;
  contentExtra: string;
  icon: ReactNode;
  children: JSX.Element;
}

export const OptionCompany = ({
  icon,
  description,
  title,
  contentExtra,
  children,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);

  return (
    <motion.article
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="grid max-w-[450px] p-8 border-2 border-black dark:bg-zinc-800 rounded-lg gap-4"
    >
      <div>
        <h5 className="flex gap-2 text-xl font-bold">
          <span>{icon}</span>
          {title}
        </h5>
        <p className="text-gray-400 text-sm">{description}</p>
        <p className="mt-4">{contentExtra}</p>
      </div>
      <Button onPress={handleClick} color="primary" variant="shadow">
        Seleccionar
      </Button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {children}
      </Modal>
    </motion.article>
  );
};
