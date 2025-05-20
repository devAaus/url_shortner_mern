import { getAllUserUrls } from "@/api/user.api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"
import { Zap } from "lucide-react"
import { Link2Off } from "lucide-react"
import { Check, Copy, ExternalLink } from "lucide-react"
import { useState } from "react"

export const UrlTable = () => {
   const [copiedId, setCopiedId] = useState(null)

   const { data, isLoading, isError, error } = useQuery({
      queryKey: ["urls"],
      queryFn: getAllUserUrls,
      // refetchInterval: 30000,
      staleTime: 0
   })

   const urls = data?.urls || []


   const copyToClipboard = (id, url) => {
      navigator.clipboard.writeText(url)
      setCopiedId(id)

      setTimeout(() => {
         setCopiedId(null)
      }, 2000)
   }

   const formatDate = (dateString) => {
      const date = new Date(dateString)
      return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
   }

   if (isLoading) {
      return (
         <div className="text-center my-6 p-4 bg-card rounded-lg">
            <div className="flex justify-center my-8">
               <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
         </div>
      )
   }

   if (isError) {
      return (
         <div className="text-center my-6 p-4 bg-card rounded-lg">
            Error loading your URLs: {error.message}
         </div>
      )
   }

   if (!urls || urls.length === 0) {
      return (
         <div className="text-center my-6 p-4 bg-card rounded-lg">
            <Link2Off className="w-12 h-12 mx-auto text-gray-400 mb-3" />
            <p className="text-lg font-medium">No URLs found</p>
            <p className="mt-1">You haven't created any shortened URLs yet.</p>
         </div>
      )
   }

   return (
      <Card>
         <CardHeader className="pb-3">
            <CardTitle>Your Links</CardTitle>
         </CardHeader>
         <CardContent>
            <div className="overflow-x-auto">
               <table className="w-full border-collapse">
                  <thead>
                     <tr className="border-b text-left text-sm font-medium text-gray-500">
                        <th className="pb-3 pr-4">Original URL</th>
                        <th className="pb-3 pr-4">Short Link</th>
                        <th className="pb-3 pr-4 text-center">Clicks</th>
                        <th className="pb-3 pr-4">Created</th>
                        <th className="pb-3 text-right">Actions</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y">
                     {urls.map((link) => (
                        <tr key={link._id} className="text-sm">
                           <td className="py-4 pr-4">
                              <div className="flex items-center gap-2">
                                 <ExternalLink className="h-4 w-4 flex-shrink-0 text-gray-400" />
                                 <span className="line-clamp-1 max-w-[200px]">{link.originalUrl}</span>
                              </div>
                           </td>
                           <td className="py-4 pr-4 font-medium text-primary">
                              <a href={link.shortUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                 {link.shortUrl.replace("https://", "")}
                              </a>
                           </td>
                           <td className="py-4 pr-4 text-center">{link.clicks}</td>
                           <td className="py-4 pr-4 text-gray-500">{formatDate(link.createdAt)}</td>
                           <td className="py-4 text-right">
                              <Button
                                 variant="outline"
                                 size="icon"
                                 onClick={() => copyToClipboard(link._id, link.shortUrl)}
                                 className="h-8 gap-1 text-gray-500"
                              >
                                 {copiedId === link._id ? (
                                    <>
                                       <Check className="h-4 w-4" />
                                    </>
                                 ) : (
                                    <>
                                       <Copy className="h-4 w-4" />
                                    </>
                                 )}
                              </Button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </CardContent>
      </Card>
   )
}
