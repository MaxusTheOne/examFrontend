import { Product, Delivery, Van } from "../services/types";


async function fetchProducts(): Promise<Product[]> {
    const response = await fetch("https://localhost8080/products");
    const data = await response.json();
    return data as Product[];
}

async function fetchDeliveries(): Promise<Delivery[]> {
    const response = await fetch("https://localhost8080/deliveries");
    const data = await response.json();
    return data as Delivery[];
}

async function fetchVans(): Promise<Van[]> {
    const response = await fetch("https://localhost8080/vans");
    const data = await response.json();
    return data as Van[];
}



export { fetchProducts, fetchDeliveries, fetchVans}