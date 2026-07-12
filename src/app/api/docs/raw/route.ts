import { NextRequest, NextResponse } from 'next/server';
import { source } from '@/lib/source';

export const revalidate = false;

export async function GET(req: NextRequest) {
  const slugParam = req.nextUrl.searchParams.get('slug');
  const slug = slugParam ? slugParam.split('/').filter(Boolean) : [];

  const page = source.getPage(slug);

  if (!page) {
    return NextResponse.json({ error: 'Page not found' }, { status: 404 });
  }

  const raw = await page.data.getText?.('raw');

  if (!raw) {
    return NextResponse.json(
      { error: 'Raw content unavailable for this page' },
      { status: 404 },
    );
  }

  return new Response(raw, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}