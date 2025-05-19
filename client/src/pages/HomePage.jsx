

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Copy, Link } from "lucide-react"
import UrlForm from "@/components/UrlForm"

export default function URLShortener() {

   return (
      <div className="flex min-h-screen items-center justify-center p-4">
         <Card className="w-full max-w-md">
            <CardHeader>
               <CardTitle className="text-2xl font-bold">URL Shortener</CardTitle>
            </CardHeader>
            <CardContent>
               <UrlForm />
            </CardContent>
         </Card>
      </div>
   )
}
