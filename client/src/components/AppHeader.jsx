import React from 'react'
import { buttonVariants } from './ui/button'

export const AppHeader = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="text-xl font-bold">
          MyApp
        </a>
        <div className="flex gap-4">
          <a
            href="/login"
            className={`${buttonVariants({ variant: 'ghost' })}`}
          >
            Login
          </a>
          <a
            href="/register"
            className={`${buttonVariants({ variant: 'default' })}`}
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  )
}
