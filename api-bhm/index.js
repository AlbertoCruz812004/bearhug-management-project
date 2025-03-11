const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors("*"));

// Configura Supabase
const supabaseUrl = "https://klbzujcmrediijhdnfbe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsYnp1amNtcmVkaWlqaGRuZmJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzNTU1ODAsImV4cCI6MjA1MDkzMTU4MH0.wZO40I0SKMOR6XNBmIbjIQtNkQM-PC2_vvA4awI8ePk";
const supabase = createClient(supabaseUrl, supabaseKey);

// Endpoint para insertar un producto
app.post("/insert-product", async (req, res) => {
  const {
    barcode,
    name,
    price_cost,
    sales_price,
    wholesale_price,
    category_id,
    quantity_in_stock,
    minimum_quantity_in_stock,
    maximum_quantity_in_stock
  } = req.body;
  console.log("[INFO] Datos recibidos para insertar:", req.body);
  const { data, error } = await supabase
    .from("product")
    .insert([
      {
        barcode,
        name,
        price_cost,
        sales_price,
        wholesale_price,
        category_id,
        quantity_in_stock,
        minimum_quantity_in_stock,
        maximum_quantity_in_stock
      }
    ])
    .select();

  if (error) {
    return res.status(400).json({
      error: error.message,
      message: "No fue posible crear el producto"
    });
  }

  res
    .status(201)
    .json({ status: 200, message: "Producto agregado correctamente" });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
