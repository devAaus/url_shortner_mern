import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { AtSign, Lock, Eye, EyeOff } from "lucide-react"
import { login } from "@/api/user.api"
import { toast } from "sonner"
import { useSelector, useDispatch } from "react-redux"
import { login as loginAction } from "@/store/slice/authSlice"
import { Link, useNavigate } from "@tanstack/react-router"

export function LoginForm() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)
   const [showPassword, setShowPassword] = useState(false)
   const navigate = useNavigate()

   const auth = useSelector((state) => state.auth)
   console.log("Auth state:", auth);

   const dispatch = useDispatch()

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
         const res = await login(email, password)
         dispatch(loginAction(res.user))

         if (res.success) {
            toast.success(res.message)
            navigate({ to: "/dashboard" })
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
               <Link to="/register" className="font-medium text-primary hover:underline">
                  Sign up
               </Link>
            </div>
         </CardFooter>
      </Card>
   )
}
