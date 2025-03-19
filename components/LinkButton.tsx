import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

type Props = {
  text?: string;
  href: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'secondary';
};
export const LinkButton = ({
  text = '詳しく見る',
  href,
  variant = 'default',
}: Props) => {
  return (
    <Button
      variant={variant}
      asChild
    >
      <Link href={href}
      >
        {text}
        <ChevronRightIcon />
      </Link>
    </Button>
  );
};
