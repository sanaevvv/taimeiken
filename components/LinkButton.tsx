import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRightIcon } from 'lucide-react';
import { Link } from '@/i18n/routing';

type Props = {
  text?: string;
  href: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'secondary';
  disabled?: boolean;
};
export const LinkButton = ({
  text = '詳しく見る',
  href,
  variant = 'default',
  className,
  disabled = false,
}: Props) => {
  return (
    <Button
      variant={variant}
      asChild
      disabled={disabled}
      className={cn(
        disabled && 'pointer-events-none opacity-50',
        className,
      )}
    >
      <Link href={href}
      >
        {text}
        <ChevronRightIcon />
      </Link>
    </Button>
  );
};
