import { Tables } from "../../../../../../database.types";
import { supabase } from "../../../../../core/services/supabase.service";

export const searchCategory = async () => {
  const { data: category } = await supabase
    .from("category")
    .select("id, name_category")
    .returns<Tables<"category">[]>()

  return category?.map(item => { return { value: item.id, text: item.name_category } }) ?? []
}

