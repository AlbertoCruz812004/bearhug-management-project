import { TableHeader, TableColumn } from "@heroui/table"

export interface RenderHeaderProps {
  columns: Columns[]
}

export interface Columns {
  key: string,
  label: string,
  sortable?: boolean
}

export const RenderHeader = ({ columns }: RenderHeaderProps) => {

  return (
    <TableHeader columns={columns}>
      {column => (
        <TableColumn
          allowsSorting={column.sortable}
          key={column.key}
        >
          {column.label}
        </TableColumn>)}
    </TableHeader>
  )
}
