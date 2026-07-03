export interface CountryResult {
  country: string;
  alpha2: string;
  alpha3: string;
  numeric: string;
}

export function all(): CountryResult[];
export function whereAlpha2(alpha2: string): CountryResult | undefined;
export function whereAlpha3(alpha3: string): CountryResult | undefined;
export function whereNumeric(numeric: string): CountryResult | undefined;
export function whereCountry(country: string): CountryResult | undefined;
