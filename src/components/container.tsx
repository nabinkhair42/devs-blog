import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("mx-auto max-w-3xl px-4 sm:px-6 lg:px-0", className)}>{children}</div>
  )
}
