import * as React from 'react'
import { cn } from '@/lib/utils'

export function Badge({ className, variant = 'default', ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: 'default' | 'secondary' | 'outline' }) {
  const base = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium'
  const styles = { default: 'bg-primary text-primary-foreground', secondary: 'bg-secondary text-secondary-foreground', outline: 'border-muted-foreground/30' } as const
  return <div className={cn(base, styles[variant], className)} {...props} />
}
