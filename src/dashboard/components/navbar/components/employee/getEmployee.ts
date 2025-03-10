import { Tables } from "../../../../../../database.types";
import { supabase } from "../../../../../core/services/supabase.service";

export async function getEmployee(index: number) {
  const dataLenght = index * 9;

  const { data: employee, error } = await supabase
    .from("employee")
    .select("id, first_name, last_name, email,position")
    .range(dataLenght - 9, dataLenght)
    .returns<Tables<"employee">[]>();

  if (error) throw new Error(error.message);

  return employee ?? [];
}

export async function countEmployee() {
  const { count, error } = await supabase
    .from('employee')
    .select('id', { count: 'exact' })

  if (error) throw new Error(error.message)

  return count ?? 0
}
