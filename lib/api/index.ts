/**
 * APIによるデータの取得
 */
export async function api<T>(path: string): Promise<T> {
  const result = await fetch(
    `http://${window.location.hostname}:4010/v1/${path}`,
  );
  return (await result.json()) as T;
}
