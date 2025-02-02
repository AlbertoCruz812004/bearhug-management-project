import {getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/table";
import {COLUMNS_PRODUCT} from "./constants/columns.ts";
import {useAsyncList} from "@react-stately/data";
import {useState} from "react";
import {CircularProgress} from "@heroui/progress";
import {loadProducts, sortProducts} from "./logic/sortTable.ts";
import {Product} from "../../../../../core/database/types-database.ts";

type Props = {};

export const TableProduct = ({}: Props) => {
    const [isLoading, setIsLoading] = useState(true);

    let asyncProductList = useAsyncList<Product>({
        async load() {
            return await loadProducts(setIsLoading); // Devuelve el objeto con `items` como un array
        },
        sort: sortProducts
    });


    return (
        <div>
            <Table isStriped selectionMode="single" color="primary" sortDescriptor={asyncProductList.sortDescriptor}
                   onSortChange={asyncProductList.sort}>
                <TableHeader columns={COLUMNS_PRODUCT}>
                    {column => <TableColumn allowsSorting key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody
                    isLoading={isLoading}
                    items={asyncProductList.items}
                    loadingContent={<CircularProgress label="Loading..."/>}
                >
                    {(item) => (
                        <TableRow key={crypto.randomUUID().toString()}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )

};