import { TableBody, TableRow, TableCell, getKeyValue } from "@heroui/table"
import { UseSortingResults } from "../../../../../../core/hooks/useSorting/useSorting"

interface Props<T> {
  sorting: UseSortingResults<T>
}

export const RenderBody = <T extends Record<string, unknown>>({ sorting }: Props<T>) => {

  return (
    <TableBody items={sorting.items}>
      {(item) => (
        <TableRow key={item.id as any}>
          {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
        </TableRow>
      )}
    </TableBody>
  )
}
