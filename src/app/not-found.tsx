import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm font-medium text-fd-muted-foreground">404</p>
      <h1 className="text-2xl font-semibold tracking-tight">
        This page doesn't exist
      </h1>
      <p className="max-w-md text-sm text-fd-muted-foreground">
        The page you're looking for may have moved or been renamed. Try the
        command index, or head back to the docs home.
      </p>
      <div className="mt-2 flex gap-3">
        <Button asChild>
          <Link href="/docs">
            Docs home
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/reference/command-index">
            Command index
          </Link>
        </Button>
      </div>
    </div>
  );
}