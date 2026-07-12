import { getPageImage, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
  PageLastUpdate,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { gitConfig } from '@/lib/layout.shared';
import { Pencil, CircleAlert } from 'lucide-react';
import Link from 'next/link';

export default async function Page(props: PageProps<'/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const githubFileUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}/edit/${gitConfig.branch}/content/docs/${page.path}`;

  const reportIssueUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}/issues/new?title=Issue+with+${encodeURIComponent(page.data.title)}&body=${encodeURIComponent(`**Page:** [${page.data.title}](https://docs.lumierelabs.xyz${page.url})\n\n**Issue:**\n\n<!-- Describe the problem with this page -->`)}&labels=documentation`;

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{ style: 'clerk', single: false }}
      tableOfContentPopover={{ style: 'clerk' }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={`${page.url}.mdx`} />
        <ViewOptionsPopover
          markdownUrl={`${page.url}.mdx`}
          githubUrl={githubFileUrl}
        />
        {page.data.lastModified && (
          <PageLastUpdate
            date={page.data.lastModified}
            className="ml-auto text-xs text-fd-muted-foreground"
          />
        )}
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />

        {/* ── Page footer actions ── */}
        <div className="mt-12 flex w-full items-center">
          <div className="h-px flex-1 bg-fd-border" aria-hidden="true" />
          
          {/* Center Content */}
          <div className="mt-12 flex w-full items-center">
            {/* Left Line */}
            <div className="h-px flex-1 bg-fd-border" aria-hidden="true" />
            
            {/* Center Content */}
            <div className="flex items-center gap-3 px-6 text-sm text-fd-muted-foreground">
              <Link 
                href={githubFileUrl}
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center gap-1.5 no-underline transition-colors hover:text-fd-foreground hover:no-underline"
              >
                <Pencil className="size-3.5" />
                Edit this page
              </Link>
              
              <span>or</span>
              
              <Link
                href={reportIssueUrl} 
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center gap-1.5 no-underline transition-colors hover:text-fd-foreground hover:no-underline"
              >
                <CircleAlert className="size-3.5" />
                Report an issue
              </Link>
            </div>

            {/* Right Line */}
            <div className="h-px flex-1 bg-fd-border" aria-hidden="true" />
          </div>

          {/* Right Line */}
          <div className="h-px flex-1 bg-fd-border" aria-hidden="true" />
        </div>
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = source.getPage(slug ?? []);
  if (!page) return {};

  const { url } = getPageImage(page);
  const baseUrl  = 'https://docs.lumierelabs.xyz';

  return {
    title:       page.data.title,
    description: page.data.description,
    openGraph: {
      title:       page.data.title,
      description: page.data.description,
      images: [{
        url:    `${baseUrl}${url}`,
        width:  1200,
        height: 630,
        alt:    page.data.title,
      }],
    },
    twitter: {
      card:        'summary_large_image',
      title:       page.data.title,
      description: page.data.description,
      images:      [`${baseUrl}${url}`],
    },
  };
}