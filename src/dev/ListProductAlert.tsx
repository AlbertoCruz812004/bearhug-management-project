import { Key, useCallback, useState } from "react";
import Modal from "../core/components/Modal";

import { ExclamationIcon } from "./icons/ExclamationIcon";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { Chip, ChipProps } from "@heroui/chip";
import { Tooltip } from "@heroui/tooltip";
import { EyeIcon, EditIcon, TrashIcon } from "./icons/";

interface Obj {
  key: string;
  name: string;
  quantity: string;
  status: string;
}

const statusColorMap: Record<string, ChipProps["color"]> = {
  bajo: "warning",
  agotado: "danger",
};

export const ListProductAlert = () => {
  const [isOpen, setIsOpen] = useState(true);

  const columns = [
    { name: "PRODUCTO", uid: "name" },
    { name: "CANTIDAD RESTANTE", uid: "quantity" },
    { name: "STATUS", uid: "status" },
    { name: "ACCIÓNES", uid: "actions" },
  ];
  const rows = [
    {
      key: "1",
      name: "Zucaritas",
      quantity: "5 piezas",
      status: "bajo",
    },
    {
      key: "2",
      name: "Cerveza Modelo",
      quantity: "0 piezas",
      status: "agotado",
    },
    {
      key: "3",
      name: "Torta Árabe",
      quantity: "2 piezas",
      status: "bajo",
    },
    {
      key: "4",
      name: "Cuaderno",
      quantity: "0 piezas",
      status: "agotado",
    },
  ];

  const renderCell = useCallback((item: any, columnKey: Key) => {
    const cellValue = item[columnKey as keyof Obj];

    switch (columnKey) {
      case "status":
        return (
          <>
            <Chip
              className="capitalize"
              color={statusColorMap[item.status]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          </>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <TrashIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="p-4">
        <span className="flex gap-3 items-center">
          <ExclamationIcon />
          <h6 className="font-bold text-xl">Alerta de Stock Bajo</h6>
        </span>
        <p className="text-sm text-gray-500">
          Los siguientes productos están alcanzando niveles críticos de
          inventario.
        </p>
        <Table aria-label="Example table with dynamic content" className="mt-5">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid}>{column.name}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </Modal>
  );
};
