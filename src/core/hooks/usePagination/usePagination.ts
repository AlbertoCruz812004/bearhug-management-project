import { useEffect, useState } from "react";
import { ResultPaging, Paging } from "./types/paginationType";

const initialPage = {
  totalElements: 0,
  size: 10,
  totalPages: 1,
  numberPage: 1
};

export default function usePagination<T>(
  fetchData: (index: number) => Promise<T[]>,
  countData: () => Promise<number>
): ResultPaging<T> {
  const [page, setPage] = useState<Paging>(initialPage);
  const [data, setData] = useState<Array<T>>([]);
  const [numberPage, setNumberPage] = useState(1);

  useEffect(
    () => {
      getData(numberPage);
      countGetData();
    },
    [numberPage]
  );

  const getData = async (index: number) => {
    try {
      const data = await fetchData(index);
      setData(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const countGetData = async () => {
    try {
      const count = await countData();
      await updatePagination(count, numberPage);
    } catch (error) {
      console.error("Failed to count data:", error);
    }
  };

  const updatePagination = async (count: number, currentPage: number) => {
    const pagination: Paging = {
      totalElements: count,
      size: 10,
      totalPages: Math.ceil(count / 10),
      numberPage: currentPage
    };
    setPage(pagination);
  };

  const goToPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= page.totalPages) {
      setNumberPage(newPage);
    }
  };

  return { data, paging: page, goToPage };
}
