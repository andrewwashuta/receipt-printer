import Redis from 'ioredis';
import type { APIRoute } from 'astro';

// Create Redis client using the connection URL from Vercel
const redis = new Redis(import.meta.env.KV_REST_API_REDIS_URL || process.env.KV_REST_API_REDIS_URL || '');

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
