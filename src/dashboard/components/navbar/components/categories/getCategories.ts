import { Tables } from "../../../../../../database.types";
import { supabase } from "../../../../../core/services/supabase.service";

export async function getCategories(index: number) {
  const dataLenght = index * 9;

  const { data: category, error } = await supabase
    .from("category")
    .select("id, name_category, description")
    .range(dataLenght - 9, dataLenght)
    .returns<Tables<"category">[]>();

  if (error) throw new Error(error.message);

  return category ?? [];
}

export async function countCategories() {
  const { data: category, error } = await supabase
    .from("category")
    .select("name_category, description")
    .returns<Tables<"category">[]>();

  if (error) throw new Error(error.message)

  return category?.length ?? 0;
}
