import { UrlTable } from "@/components/UrlTable"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import UrlForm from "@/components/UrlForm"
import { UrlStats } from "@/components/UrlStats"

export const DashboardPage = () => {
   return (
      <main className="flex-1 p-4">
         <div className="mx-auto max-w-4xl">
            <Card className="mb-6">
               <CardHeader className="pb-3">
                  <CardTitle>Create Short Link</CardTitle>
               </CardHeader>
               <CardContent>
                  <UrlForm />
               </CardContent>
            </Card>
            <UrlStats />
            <UrlTable />
         </div>
      </main>
   )
}
