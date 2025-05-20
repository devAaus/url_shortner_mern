import { RegisterForm } from '@/components/auth/RegisterForm'

export default function RegisterPage() {
   return (
      <main className="flex flex-1 items-center justify-center p-4">
         <div className="w-full max-w-md space-y-8">
            <div className="text-center">
               <h1 className="text-3xl font-bold">Create an account</h1>
               <p className="mt-2 text-gray-600">Fill in your details to get started</p>
            </div>

            <RegisterForm />
         </div>
      </main>
   )
}
