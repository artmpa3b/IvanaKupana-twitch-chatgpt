import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap transition-transform duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
  return <button className={cn(buttonVariants(), className)} ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button }
