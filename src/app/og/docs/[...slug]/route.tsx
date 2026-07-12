// src/app/og/docs/[...slug]/route.tsx
import { source, getPageImage } from '@/lib/source';
import { ImageResponse } from 'next/og';
import { notFound } from 'next/navigation';

export const runtime = 'nodejs';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;

  // Strip trailing 'image.webp' that getPageImage appends
  const pageSlug = slug.filter((s) => s !== 'image.webp');

  const page = source.getPage(pageSlug);
  if (!page) return notFound();

  const title       = page.data.title ?? 'Lumière Documentation';
  const description = page.data.description ?? 'The official docs for Lumière — the free all-in-one Discord bot.';

  return new ImageResponse(
    (
      <div
        style={{
          width:           '100%',
          height:          '100%',
          display:         'flex',
          flexDirection:   'column',
          justifyContent:  'flex-end',
          backgroundColor: '#ffffff',
          padding:         '64px 72px',
          position:        'relative',
          fontFamily:      'sans-serif',
          overflow:        'hidden',
        }}
      >
        {/* ── Gradient mesh — top right, matching the image ── */}
        <div
          style={{
            position:     'absolute',
            top:          '-60px',
            right:        '-60px',
            width:        '620px',
            height:       '520px',
            borderRadius: '50%',
            background:   'radial-gradient(ellipse at 70% 30%, #ff6b6b 0%, #ff9f43 20%, #a29bfe 45%, #74b9ff 65%, #55efc4 85%, transparent 100%)',
            opacity:      0.85,
            filter:       'blur(1px)',
          }}
        />

        {/* Fine line texture overlay on gradient */}
        <div
          style={{
            position:        'absolute',
            top:             '-60px',
            right:           '-60px',
            width:           '620px',
            height:          '520px',
            borderRadius:    '50%',
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.15) 3px, rgba(255,255,255,0.15) 4px)',
            opacity:         0.6,
          }}
        />

        {/* ── Logo mark — top left ── */}
        <div
          style={{
            position:   'absolute',
            top:        '52px',
            left:       '72px',
            display:    'flex',
            alignItems: 'center',
            gap:        '10px',
          }}
        >
          {/* Sunburst icon — matches the one in your screenshot */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Array.from({ length: 12 }).map((_, i) => {
              const angle  = (i / 12) * Math.PI * 2;
              const inner  = 6;
              const outer  = 16 + (i % 3) * 2;
              const x1     = 18 + inner  * Math.cos(angle);
              const y1     = 18 + inner  * Math.sin(angle);
              const x2     = 18 + outer  * Math.cos(angle);
              const y2     = 18 + outer  * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={x1} y1={y1}
                  x2={x2} y2={y2}
                  stroke="#0a0a0a"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              );
            })}
          </svg>
        </div>

        {/* ── Bottom divider line ── */}
        <div
          style={{
            position:   'absolute',
            bottom:     '0',
            left:       '0',
            right:      '0',
            height:     '3px',
            background: 'linear-gradient(90deg, transparent 0%, #ff6b6b 20%, #ff9f43 35%, #a29bfe 55%, #74b9ff 70%, #55efc4 90%, transparent 100%)',
          }}
        />

        {/* ── Text content — bottom left ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '820px' }}>
          <div
            style={{
              fontSize:     '72px',
              fontWeight:   '900',
              color:        '#0a0a0a',
              lineHeight:   '1.05',
              letterSpacing:'-0.03em',
              fontFamily:   'sans-serif',
            }}
          >
            {title}
          </div>

          {description && (
            <div
              style={{
                fontSize:    '24px',
                fontWeight:  '400',
                color:       '#6b7280',
                lineHeight:  '1.4',
                letterSpacing: '-0.01em',
                maxWidth:    '700px',
              }}
            >
              {description}
            </div>
          )}
        </div>
      </div>
    ),
    {
      width:  1200,
      height: 630,
    }
  );
}