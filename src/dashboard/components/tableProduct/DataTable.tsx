import Loading from "../../../core/components/Loading";
import { usePaginationAndSorting } from "../../../core/hooks/usePaginationAndSorting";
import { Columns } from "./component/renderTable/components/RenderHeader";
import { FunctionData } from "../../../core/hooks/usePagination/types/paginationType";
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableProps, TableRow } from "@heroui/table";
import { NavBarPagination } from "./component/renderTable/components/NavBarPagination";

interface Props<T> {
  columns: Columns[];
  fetchData: FunctionData<T>;
  countData: () => Promise<number>;
}

export const DataTable = <T extends Record<string, unknown>>({
  columns,
  fetchData,
  countData,
}: Props<T>) => {
  const { sorting, goToPage, paging } = usePaginationAndSorting<T>(
    fetchData,
    countData
  );

  return (
    <Table
      {...TableProperties}
      sortDescriptor={sorting.sortDescriptor}
      onSortChange={sorting.onSortChange}
      bottomContent={
        <NavBarPagination
          goToPage={goToPage}
          numberPage={paging.numberPage}
          totalPages={paging.totalPages}
        />
      }
    >
      <TableHeader columns={columns}>
        {column => <TableColumn allowsSorting key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody
        items={sorting.items}
        isLoading={!sorting?.items || sorting.items.length === 0}
        loadingContent={<Loading />}
      >
        {(item) => (
          <TableRow key={item.id as any}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

const TableProperties: TableProps = {
  isStriped: true,
  color: "primary",
  selectionMode: "single",
  "aria-label": "Example table with client side pagination",
  classNames: {
    wrapper: "h-[500px]"
  }
}
