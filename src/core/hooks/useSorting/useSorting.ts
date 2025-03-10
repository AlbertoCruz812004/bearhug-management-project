import { SortDescriptor } from "@heroui/table";
import { AsyncListLoadOptions, useAsyncList } from "@react-stately/data";
import { useCallback, useEffect } from "react"

export interface UseSortingResults<T> {
  items: Array<T>
  sortDescriptor?: SortDescriptor,
  onSortChange: (descriptor: SortDescriptor) => any
}

type AsyncListParams<T> = AsyncListLoadOptions<T, string> & { sortDescriptor: SortDescriptor };
type FunctionFetch<T> = () => Promise<Array<T>>

export const useSorting = <T extends Record<string, unknown>>(fetchData: FunctionFetch<T>): UseSortingResults<T> => {

  const sortData = useCallback(({ items, sortDescriptor }: AsyncListParams<T>) => {
    const { column, direction } = sortDescriptor;

    return {
      items: [...items].sort((a, b) => {
        const first = a[column];
        const second = b[column];

        if (typeof first === "number" && typeof second === "number") {
          return direction === "ascending" ? first - second : second - first;
        }

        if (typeof first === "string" && typeof second === "string") {
          return direction === "ascending" ? first.localeCompare(second) : second.localeCompare(first);
        }

        return 0; // No se puede ordenar
      }),
    };
  }, []);

  const loadData = async () => {
    try {
      return { items: await fetchData() };
    } catch (error) {
      console.error("Failed to load data:", error);
      return { items: [] };
    }
  };

  const asyncListInstance = useAsyncList<T>({
    load: loadData,
    sort: sortData,
  });

  useEffect(() => {
    asyncListInstance.reload()
  }, [fetchData])

  return {
    items: asyncListInstance.items,
    sortDescriptor: asyncListInstance.sortDescriptor,
    onSortChange: asyncListInstance.sort,
  };
}
