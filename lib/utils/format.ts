export function formatPrice(value: number): string {
  return new Intl.NumberFormat("ru-RU").format(value);
}

export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("7")) {
    return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(
      7,
      9,
    )}-${digits.slice(9, 11)}`;
  }
  if (digits.length === 10 && digits.startsWith("862")) {
    return `+7 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(
      6,
      8,
    )}-${digits.slice(8, 10)}`;
  }
  return raw;
}

export function telHref(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  const normalized = digits.length === 10 ? `7${digits}` : digits;
  return `tel:+${normalized}`;
}
