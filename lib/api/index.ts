/**
 * APIによるデータの取得
 */
export async function api<T>(path: string): Promise<T> {
  const result = await fetch(`http://localhost:4010/v1/${path}`, {
    cache: 'no-store',
  });
  return (await result.json()) as T;
}
