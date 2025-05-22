import React from 'react'
import { Button, buttonVariants } from './ui/button'
import { Link, useNavigate } from '@tanstack/react-router'
import { LinkIcon } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Avatar, AvatarFallback } from './ui/avatar'
import { LogOut } from 'lucide-react'
import { logout } from '@/api/user.api'
import { toast } from 'sonner'
import { logout as logoutAction } from '@/store/slice/authSlice'
import { useDispatch } from 'react-redux'


export const AppHeader = () => {
  const auth = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandle = async () => {
    const res = await logout()

    if (res.success) {
      dispatch(logoutAction())
      navigate({ to: '/login' })
      toast.success('Logout successfully')
    }

  }
  return (
    <header className="border-b">
      <div className="flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-primary p-1.5">
            <LinkIcon className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">ShortLink</span>
        </Link>
        {auth.isAuthenticated ? (
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Avatar>
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
            <Button
              onClick={logoutHandle}
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
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
