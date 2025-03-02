import { AsyncListLoadOptions } from "@react-stately/data";
import { SortDescriptor } from "@heroui/table";

export const loadData = async (setIsLoading: (loading: boolean) => void, fetchData: () => Promise<any>) => {
  try {
    const data = await fetchData();
    setIsLoading(false);
    return { items: data ?? [] }; // Asegura que `items` sea un array
  } catch (error) {
    console.error("Failed to load products:", error);
    setIsLoading(false);
    return { items: [] }; // Devuelve un array vacío en caso de error
  }
};

export const sortData = <T>({ items, sortDescriptor }: AsyncListLoadOptions<T, string> & { sortDescriptor: SortDescriptor }) => {
  return {
    items: items.sort((a, b) => compareValues(
      a[sortDescriptor.column as keyof T],
      b[sortDescriptor.column as keyof T],
      sortDescriptor.direction)
    ),
  };
};

const compareValues = (first: any, second: any, direction: 'ascending' | 'descending') => {
  let cmp = 0;
  if (typeof first === 'string' && typeof second === 'string') {
    cmp = first.localeCompare(second); // Comparación de cadenas
  } else if (typeof first === 'number' && typeof second === 'number') {
    cmp = first - second; // Comparación de números
  }

  if (direction === 'descending') {
    cmp *= -1;
  }

  return cmp;
}
