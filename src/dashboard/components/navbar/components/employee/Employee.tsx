import { Tables } from "../../../../../../database.types"
import { DataTable } from "../../../tableProduct/DataTable"
import { COLUMNS_EMPLOYEE } from "./columnsEmployee"
import { countEmployee, getEmployee } from "./getEmployee"

export const Employee = () => {
  return (
    <section className="min-w-[800px] w-[1000px] max-w-[1200px]">
      <DataTable<Tables<"employee">>
        columns={COLUMNS_EMPLOYEE}
        fetchData={getEmployee}
        countData={countEmployee}
      />
    </section>
  )
}
