import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import UrlForm from "@/components/UrlForm"

export const DashboardPage = () => {
   return (
      <main className="flex-1 p-4">
         <div className="container mx-auto max-w-5xl">
            <Card className="mb-6">
               <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-bold">Create Short Link</CardTitle>
               </CardHeader>
               <CardContent>
                  <UrlForm />
               </CardContent>
            </Card>
         </div>
      </main>
   )
}
