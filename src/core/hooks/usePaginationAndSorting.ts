import { useSorting } from "./useSorting/useSorting"
import usePagination from "./usePagination/usePagination"
import { FunctionData } from "./usePagination/types/paginationType"
import { useCallback } from "react"

export const usePaginationAndSorting = <T extends Record<string, unknown>>(
  fetchData: FunctionData<T>,
  countData: () => Promise<number>
) => {
  const { data, paging, goToPage } = usePagination<T>(fetchData, countData)

  const fetchSortedData = useCallback(() => Promise.resolve(data), [data]);
  const sorting = useSorting<T>(fetchSortedData);

  return { sorting, paging, goToPage }
}
