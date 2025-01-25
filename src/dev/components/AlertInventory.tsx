import Modal from "../../core/components/Modal";
import { Button } from "@heroui/button";
import { ExclamationIcon } from "./../icons/";

export const AlertInventory = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} hiddenButtonClose>
      <div className="p-4 w-[425px] grid">
        <span className="flex gap-3 items-center">
          <ExclamationIcon />
          <h6 className="font-bold text-xl">Alerta de Stock Bajo</h6>
        </span>
        <p className="text-sm text-gray-500 mt-3">
          El producto <span className=" font-bold">Camiseta Adidas</span> está
          alcanzando niveles críticos de inventario.
        </p>
        <p className="text-lg font-bold my-5 text-center">
          Unidades restantes 5
        </p>
        <Button variant="flat" color="primary">
          Entendido
        </Button>
      </div>
    </Modal>
  );
};
