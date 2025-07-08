export function getQueryParams<T extends object = never>(): Partial<T> {
  const search = window.location.search.substring(1);
  return Object.fromEntries(new URLSearchParams(search)) as Partial<T>;
}
