//!TODO: MAKE A FACTORY

interface Person {
    id: number;
    name: string;
}

interface Product {
    id: number;
    name: string;
}

export interface Order{
    id: number;
    name: string;
    client: Person;
    deliveryman: Person;
    date: string;
    price: number;
    products: Product[];
    state: boolean;
}