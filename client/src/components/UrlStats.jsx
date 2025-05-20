
import { getUserUrlsStats } from "@/api/user.api"
import { Card, CardContent, } from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"

export const UrlStats = () => {
   const { data } = useQuery({
      queryKey: ["stats"],
      queryFn: getUserUrlsStats,
      // refetchInterval: 30000,
      staleTime: 0,
   })

   return (
      <div className="mb-6 grid gap-4 md:grid-cols-4">
         <Card>
            <CardContent className="p-6">
               <div className="text-sm font-medium text-gray-500">Total Links</div>
               <div className="mt-2 text-3xl font-bold">{data.totalUrls}</div>
            </CardContent>
         </Card>
         <Card>
            <CardContent className="p-6">
               <div className="text-sm font-medium text-gray-500">Total Clicks</div>
               <div className="mt-2 text-3xl font-bold">
                  {data.totalClicks}
               </div>
            </CardContent>
         </Card>
      </div>
   )
}
