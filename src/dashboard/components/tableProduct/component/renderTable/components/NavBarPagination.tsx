import { Pagination } from "@heroui/pagination"
import { Paging } from "../../../../../../core/hooks/usePagination/types/paginationType"

interface Props extends Omit<Paging, "totalElements" | "size"> {
  goToPage: (index: number) => void
}

export const NavBarPagination = ({ totalPages, numberPage, goToPage }: Props) => {
  const showBar = totalPages < 2;

  if (showBar) return <span></span>

  return (
    <div className="flex w-full justify-center">
      <Pagination
        isCompact
        showControls
        showShadow
        color="primary"
        page={numberPage}
        total={totalPages}
        onChange={page => goToPage(page)}
      />
    </div>
  )
}
