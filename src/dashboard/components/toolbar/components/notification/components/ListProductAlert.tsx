import { Table, TableBody, TableColumn, TableHeader } from "@heroui/table";

export const ListProductAlert = () => {
  const columns = [
    { key: "asunto", label: "ASUNTO" },
    { key: "message", label: "MENSAJE" },
  ];

  return (
    <div className="w-[600px]">
      <Table>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent="No hay contenido">{[]}</TableBody>
      </Table>
    </div>
  );
};
