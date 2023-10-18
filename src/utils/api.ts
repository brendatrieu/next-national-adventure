import createApiUrl from './createApiUrl';

export async function getAllParks({
  start,
  limit,
}: {
  start?: string;
  limit?: string;
}) {
  const path = createApiUrl({ start, limit });
  const response = await fetch(path);
  const data = await response.json();
  return data;
}
