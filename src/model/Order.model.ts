import { Item } from "./Item.model";

export interface IOrder {
    getItem(): Item;
    getPrice(): number;
    getQuantity(): number;
    getId(): string;
}