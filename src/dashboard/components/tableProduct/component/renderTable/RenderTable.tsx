import { Table, TableProps } from "@heroui/table"
import { Paging } from "../../../../../core/hooks/usePagination/types/paginationType"
import { UseSortingResults } from "../../../../../core/hooks/useSorting/useSorting"
import { NavBarPagination } from "./components/NavBarPagination"
import { RenderBody } from "./components/RenderBody"
import { RenderHeader, RenderHeaderProps } from "./components/RenderHeader"

interface Props<T> extends RenderHeaderProps {
  sorting: UseSortingResults<T>
  paging: Paging
  goToPage: (index: number) => void
  generateKey: (item: T) => string | number
}

export const RenderTable = <T,>({
  sorting,
  paging,
  columns,
  goToPage,
  generateKey
}: Props<T>) => {
  console.log("renderizando");
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
      <RenderHeader columns={columns} />
      <RenderBody<T> items={sorting.items} generateKey={generateKey} />
    </Table >
  )

}

const TableProperties: TableProps = {
  isStriped: true,
  color: "primary",
  selectionMode: "single",
  "aria-label": "Example table with client side pagination",
  classNames: {
    wrapper: "h-[500px]"
  }
}
