import { LoginForm } from '@/components/auth/LoginForm'

export default function LoginPage() {
   return (
      <main className="flex flex-1 items-center justify-center p-4">
         <div className="w-full max-w-md space-y-8">
            <div className="text-center">
               <h1 className="text-3xl font-bold">Welcome back</h1>
               <p className="mt-2 text-gray-600">Sign in to your account</p>
            </div>

            <LoginForm />
         </div>
      </main>
   )
}
