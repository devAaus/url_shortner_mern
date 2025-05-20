import React from 'react'
import { buttonVariants } from './ui/button'
import { Link } from '@tanstack/react-router'
import { LinkIcon } from 'lucide-react'
import { useSelector } from 'react-redux'
import { UserDropdown } from './UserDropdown'

export const AppHeader = () => {
  const auth = useSelector((state) => state.auth)
  console.log("Auth state:", auth);
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-primary p-1.5">
            <LinkIcon className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">ShortLink</span>
        </Link>
        {auth.isAuthenticated ? (
          <UserDropdown user={auth.user} />
        ) : (
          <div className="flex gap-4">
            <Link
              to="/login"
              className={`${buttonVariants({ variant: 'ghost' })}`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`${buttonVariants({ variant: 'default' })}`}
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
