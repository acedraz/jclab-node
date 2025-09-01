import companyData from './company.json';
import { Address } from "../model/address.tsx";
import { Addresses } from "../model/addresses.tsx";
import { Social } from "../model/social.tsx";
import { Company } from "../model/company.tsx";

export function getStore(): string {
    return import.meta.env.VITE_DEFAULT_STORE || 'default';
}

export function getCompanyData(storeCode: string | null): Company | null {
    const code = storeCode || getStore();
    return companyData.find((c: any) => c.store === code) || null;
}

export function getCompanyFundationDate(): Date | null {
    const dateStr = getCompanyData()?.date_fundation;
    if (!dateStr) return null;
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? null : date;
}

export function getCompanyYearsSinceFundation(): number | null {
    const fundationDate = getCompanyFundationDate();
    if (!fundationDate) return null;
    const now = new Date();
    let years = now.getFullYear() - fundationDate.getFullYear();
    const hasHadBirthday =
        now.getMonth() > fundationDate.getMonth() ||
        (now.getMonth() === fundationDate.getMonth() && now.getDate() >= fundationDate.getDate());
    if (!hasHadBirthday) years--;
    return years;
}

export function getSocials(): Social[] {
    return getCompanyData().social || [];
}

export function getAddresses(): Addresses[] {
    return getCompanyData().addresses || [];
}

export function getSocialValue(socialType: string): string | null {
    const social = getSocials().find((c: any) => c.type === socialType) || null;
    return social ? social.value : null;
}

export function getAddress(type: string | null = 'billing'): Address {
    const address = getCompanyData()?.addresses.find((a: any) => a.type === type) || null;
    if (!address) throw new Error(`Address of type '${type}' not found.`);
    return address.address;
}