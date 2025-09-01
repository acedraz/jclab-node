import { Address } from "../model/address.tsx";

export type Addresses = {
    type: string;
    cnpj: string;
    address: Address[];
};