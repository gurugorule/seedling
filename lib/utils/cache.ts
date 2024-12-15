const cache = new Map<string, { data: any; timestamp: number }>();
const DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes

export function setCache(key: string, data: any, ttl: number = DEFAULT_TTL): void {
  cache.set(key, {
    data,
    timestamp: Date.now() + ttl,
  });
}

export function getCache(key: string): any {
  const item = cache.get(key);
  if (!item) return null;
  
  if (Date.now() > item.timestamp) {
    cache.delete(key);
    return null;
  }
  
  return item.data;
}

export function clearCache(): void {
  cache.clear();
}

export function removeCache(key: string): void {
  cache.delete(key);
}