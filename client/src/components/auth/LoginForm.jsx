import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { AtSign, Lock, Eye, EyeOff } from "lucide-react"
import { login } from "@/api/user.api"
import { toast } from "sonner"

export function LoginForm() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)
   const [showPassword, setShowPassword] = useState(false)

   const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      setError(null)

      if (!email || !password) {
         setError("All fields are required")
         setLoading(false)
         return
      }

      try {
         const data = await login(email, password)
         if (data.success) {
            toast.success(data.message)
            setEmail("")
            setPassword("")
         }

      } catch (error) {
         const message = error?.response?.data?.message || "Login failed. Please try again.";
         toast.error(message);
      } finally {
         setLoading(false)
      }
   }

   return (
      <Card>
         <form onSubmit={handleSubmit}>
            <CardContent className="pt-6 space-y-4">
               <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                     <AtSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                     <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                     />
                  </div>
               </div>

               <div className="space-y-2">
                  <div className="flex items-center justify-between">
                     <Label htmlFor="password">Password</Label>
                     <Button variant="link" size="sm" className="px-0 font-normal text-xs">
                        Forgot password?
                     </Button>
                  </div>
                  <div className="relative">
                     <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                     <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10"
                        required
                     />
                     <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                     >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                     </Button>
                  </div>
               </div>

               {error && (
                  <div className="text-red-500 text-sm">
                     {error}
                  </div>
               )}

               <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Signing in..." : "Sign in"}
               </Button>
            </CardContent>
         </form>

         <CardFooter className="flex justify-center border-t p-4">
            <div className="text-sm text-gray-600">
               Don't have an account?{" "}
               <a href="/register" className="font-medium text-primary hover:underline">
                  Sign up
               </a>
            </div>
         </CardFooter>
      </Card>
   )
}
