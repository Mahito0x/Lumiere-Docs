import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const gitConfig = {
  user:   'Mahito0x',
  repo:   'Lumiere-Docs',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/Mahito0x/Lumiere-Docs',
    nav: {
      transparentMode: 'top',
      title: (
        <div className="flex items-center gap-2 select-none">
          <div className="transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/logomark-light.svg" 
              alt="Lumière Logomark" 
              width={40} 
              height={40} 
              priority 
              className="block dark:hidden object-contain" 
            />
            <Image 
              src="/logomark-dark.svg"  
              alt="Lumière Logomark" 
              width={40} 
              height={40} 
              priority 
              className="hidden dark:block object-contain" 
            />
          </div>
          <span className="ml-1 text-2xl font-black tracking-tighter
                    text-foreground leading-none">
            Lumière
          </span>
        </div>
      ),
      url: 'https://lumierelabs.xyz',
    },
  };
}