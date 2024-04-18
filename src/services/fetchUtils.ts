import { Product, Delivery, Van } from "./types";


const url = "http://localhost:8080/api";

export function makeOptions(
  method: string,
  body: object | null,
  headers: object = {},
): RequestInit {
  const opts: RequestInit = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      ...headers,
    },
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

export async function handleHttpErrors(res: Response) {
  if (!res.ok) {
    const errorResponse = await res.json();
    const msg = errorResponse.message
      ? errorResponse.message
      : "No details provided";
    throw new Error(msg);
  }
  return res.json();
}

async function fetchProducts(): Promise<Product[]> {
  const options = makeOptions("GET", null, undefined);
  return fetch(url+"/products", options).then(handleHttpErrors) as Promise<Product[]>;
}
async function postProduct(Product: Product): Promise<Product> {
  const options = makeOptions("POST", Product, undefined);
  return fetch(url+"/products", options).then(handleHttpErrors);
}


async function fetchDeliveries(): Promise<Delivery[]> {
  const options = makeOptions("GET", null, undefined);
  return fetch(url+"/deliveries", options).then(handleHttpErrors) as Promise<Delivery[]>;
}

async function postDelivery(Delivery: Delivery): Promise<Delivery> {
  const options = makeOptions("POST", Delivery, undefined);
  return fetch(url+"/deliveries", options).then(handleHttpErrors);
}

async function fetchVans(): Promise<Van[]> {
  const options = makeOptions("GET", null, undefined);
  return fetch(url+"/vans", options).then(handleHttpErrors) as Promise<Van[]>;
}



export { fetchProducts, fetchDeliveries, fetchVans, postProduct, postDelivery}