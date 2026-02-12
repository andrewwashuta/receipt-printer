import { kv } from '@vercel/kv';
import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const increment = url.searchParams.get('increment') === 'true';

    let count: number;
    if (increment) {
      count = await kv.incr('visitor-count');
    } else {
      count = (await kv.get<number>('visitor-count')) || 0;
    }

    return new Response(JSON.stringify({ count }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Visitor counter error:', error);
    return new Response(JSON.stringify({ count: 0, error: String(error) }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
