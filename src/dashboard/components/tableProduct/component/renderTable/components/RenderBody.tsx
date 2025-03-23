import { TableBody, TableRow, TableCell, getKeyValue } from "@heroui/table";
import { UseSortingResults } from "../../../../../../core/hooks/useSorting/useSorting";

interface Props {
  sorting: UseSortingResults<any>;
}

export const RenderBody = ({ sorting }: Props) => {
  return (
    <TableBody items={sorting.items}>
      {(item) => (
        <TableRow key={item.id as any}>
          {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
        </TableRow>
      )}
    </TableBody>
  );
};
