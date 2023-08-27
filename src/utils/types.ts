export interface Product{
    id:number,
    name: string,
    img: string,
    description: string,
    price: number,
}

export interface CartItem extends Product{
    quantity:number,
}