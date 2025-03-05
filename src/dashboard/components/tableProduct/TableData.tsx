import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from "@heroui/table";
import { Pagination } from "@heroui/pagination";
import usePagination from "../../../core/hooks/usePagination";
import {
  countCategories,
  getCategories
} from "../navbar/components/categories/getCategories";
import { Tables } from "../../../../database.types";
import Loading from "../../../core/components/Loading";

export const TableData = () => {
  const { data, goToPage, paging } = usePagination<Tables<"category">>({
    fetchData: getCategories,
    countData: countCategories
  });

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="h-[800px]">
      <Table
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={paging.numberPage}
              total={paging.totalPages}
              onChange={page => goToPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "h-[500px]"
        }}
      >
        <TableHeader>
          <TableColumn key="name_category">NOMBRE</TableColumn>
          <TableColumn key="description">DESCRIPCION</TableColumn>
        </TableHeader>
        <TableBody items={data}>
          {item =>
            <TableRow key={item.name_category}>
              {columnKey =>
                <TableCell>
                  {getKeyValue(item, columnKey)}
                </TableCell>}
            </TableRow>}
        </TableBody>
      </Table>
    </div>
  );
};
