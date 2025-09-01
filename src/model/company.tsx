import { Addresses } from "../model/addressws";
import { Social } from "../model/social";
import { Hour } from "./hour";

export type Company = {
    store: string;
    date_fundation: string;
    name: string;
    cnpj: string;
    addresses: Addresses[];
    social: Social[];
    hours: Hour[];
};