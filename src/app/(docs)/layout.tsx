import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const { nav, ...base } = baseOptions();
  return (
    <DocsLayout 
      {...baseOptions()}
      // nav={{ ...nav, mode: 'top' }} 
      tree={source.getPageTree()}>
      {children}
    </DocsLayout>
  );
}