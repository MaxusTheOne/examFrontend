interface Product {
    id: number;
    name: string;
    price: number;
    weight: number;
}

type OrderTuple = [Product, number]


interface ProductOrder {
    list: OrderTuple[];
}

interface Delivery {
    id: number;
    deliveryDate: Date;
    fromWarehouse: string;
    destination: string;
}

interface Van {
    id: number;
    brand: string;
    model: string;
    capacity: number;
}

interface ItemType {
    id: number;
    type: string;
    list: Delivery | Product | Van;
}

export type { ItemType, Product, Delivery, Van, ProductOrder, OrderTuple}