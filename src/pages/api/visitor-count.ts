import Redis from 'ioredis';
import type { APIRoute } from 'astro';

export const prerender = false;

// Create Redis client with TLS (required by Upstash/Redis Cloud)
const redisUrl = process.env.KV_REST_API_REDIS_URL || '';
const redis = new Redis(redisUrl, {
  tls: redisUrl ? {} : undefined,
  maxRetriesPerRequest: 3,
  retryStrategy(times) {
    if (times > 3) return null;
    return Math.min(times * 200, 1000);
  },
});

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const increment = url.searchParams.get('increment') === 'true';

    if (increment) {
      // Increment and return new value
      const count = await redis.incr('visitor-count');
      return new Response(JSON.stringify({ count }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        }
      });
    } else {
      // Just get current value
      const value = await redis.get('visitor-count');
      const count = value ? parseInt(value, 10) : 0;
      return new Response(JSON.stringify({ count }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        }
      });
    }
  } catch (error) {
    console.error('Visitor counter error:', error);
    return new Response(JSON.stringify({ count: 0 }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
