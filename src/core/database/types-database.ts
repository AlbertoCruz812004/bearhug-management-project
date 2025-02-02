// Tipos para las tablas
export type Category = {
    id: number;
    name: string;
};

export type Supplier = {
    id: number;
    name: string;
    contact_info?: string;
};

export type Product = {
    id: number;
    name: string;
    description?: string;
    price: number;
    quantity: number;
    category_id: number;
    supplier_id: number;
    purchase_cost: number;
    min_quantity: number;
    max_quantity: number;
    barcode: string;
};

export type InventoryTransaction = {
    id: number;
    product_id: number;
    transaction_type: 'IN' | 'OUT';
    quantity: number;
    transaction_date: string; // o Date si lo conviertes
    notes?: string;
};

export type Company = {
    id: number;
    name: string;
    address?: string;
    contact_info?: string;
};

export type Owner = {
    id: number;
    name: string;
    contact_info?: string;
    company_id: number;
};

export type Employee = {
    id: number;
    name: string;
    position?: string;
    salary?: number;
    hire_date?: string; // o Date si lo conviertes
    company_id: number;
};