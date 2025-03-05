import { CircularProgress } from "@heroui/progress";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue
} from "@heroui/table";
import { AsyncListData } from "@react-stately/data";
import { Key, useCallback, ReactNode } from "react";

interface Props {
  useAsyncList: AsyncListData<any>;
  isLoading: boolean;
  columns: Array<{ key: string; label: string }>;
  renderCell?: (columnKey: Key, cellValue: any) => ReactNode;
}

export const RenderTable = ({
  useAsyncList,
  isLoading,
  columns,
  renderCell
}: Props) => {
  const renderCustomCell = useCallback(
    (item: typeof useAsyncList.items, columnKey: Key) => {
      const cellValue = item[columnKey as keyof typeof useAsyncList.items];
      if (renderCell) {
        return renderCell(columnKey, cellValue);
      }
    },
    []
  );

  return (
    <Table
      isStriped
      selectionMode="single"
      color="primary"
      sortDescriptor={useAsyncList.sortDescriptor}
      onSortChange={useAsyncList.sort}
    >
      <TableHeader columns={columns}>
        {column =>
          <TableColumn allowsSorting key={column.key}>
            {column.label}
          </TableColumn>}
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        items={useAsyncList.items}
        loadingContent={<CircularProgress label="Loading..." />}
      >
        {item =>
          <TableRow key={crypto.randomUUID()}>
            {columnKey =>
              <TableCell>
                {renderCell
                  ? renderCustomCell(item, columnKey)
                  : getKeyValue(item, columnKey)}
              </TableCell>}
          </TableRow>}
      </TableBody>
    </Table>
  );
};
