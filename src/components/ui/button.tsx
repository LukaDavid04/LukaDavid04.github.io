import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:opacity-90',
        secondary: 'bg-secondary text-secondary-foreground hover:opacity-90',
        outline: 'border bg-background hover:bg-secondary',
        ghost: 'hover:bg-secondary',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
)

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  asChild?: boolean
}

type ButtonAsButton = ButtonBaseProps & { asChild?: false } & React.ButtonHTMLAttributes<HTMLButtonElement>
type ButtonAsAnchor = ButtonBaseProps & { asChild: true; children: React.ReactElement } & React.AnchorHTMLAttributes<HTMLAnchorElement>
type ButtonProps = ButtonAsButton | ButtonAsAnchor

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }))

    if (asChild && React.isValidElement(children)) {
      const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>
      return React.cloneElement(children as React.ReactElement, {
        ...anchorProps,
        ref,
        className: cn(classes, (children as { props?: { className?: string } }).props?.className),
      })
    }

    const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...buttonProps}>
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
