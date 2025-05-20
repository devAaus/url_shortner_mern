
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
