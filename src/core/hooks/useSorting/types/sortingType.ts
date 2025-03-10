import { SortDescriptor } from "@heroui/table"

export interface ResultSorting<T> {
  sortDescriptor: SortDescriptor | undefined
  sort: (descriptor: SortDescriptor) => void
  items: Array<T>
}


