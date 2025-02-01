import { supabase } from "../../../../core/services/supabase.service";

export async function getCategory() {
  try {
    let { data: categories, error } = await supabase
      .from("categories")
      .select("name");

    if (error) throw new Error(error.message);

    return categories?.map((item) => item.name as string);
  } catch (error) {
    console.log((error as Error).message);
  }
}
