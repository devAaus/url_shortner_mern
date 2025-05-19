import { useState } from "react"
import { Link, Check, Copy } from "lucide-react"
import axios from "axios";

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

function UrlForm() {
   const [url, setUrl] = useState()
   const [shortUrl, setShortUrl] = useState()
   const [loading, setLoading] = useState(false)
   const [copied, setCopied] = useState(false)


   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true)

      if (!url) return

      const { data } = await axios.post(`http://localhost:3000/api/create`, { url });

      setShortUrl(data.shortUrl);
      setUrl("");
   }

   const copyToClipboard = () => {
      if (!shortUrl) return

      navigator.clipboard.writeText(shortUrl)
      setCopied(true)

      setTimeout(() => {
         setCopied(false)
      }, 2000)
   }

   return (
      <>
         <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
               <Label htmlFor="url" className="text-gray-700">
                  Enter your URL
               </Label>
               <div className="relative">
                  <Link className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                     type="url"
                     id="url"
                     value={url}
                     onChange={(e) => setUrl(e.target.value)}
                     placeholder="https://example.com"
                     className="pl-10"
                     required
                  />
               </div>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
               {loading ? "Shortening..." : "Shorten URL"}
            </Button>
         </form>

         {shortUrl && (
            <div className="mt-6 space-y-2">
               <p className="text-sm font-medium text-gray-500">
                  Your shortened URL:
               </p>
               <div className="flex items-center gap-2">
                  <Input
                     value={shortUrl}
                     readOnly
                     className="bg-gray-50"
                  />
                  <Button
                     size="icon"
                     variant="outline"
                     onClick={copyToClipboard} className="flex-shrink-0"
                  >
                     {copied
                        ? <Check className="h-4 w-4" />
                        : <Copy className="h-4 w-4" />
                     }
                  </Button>
               </div>
            </div>
         )}
      </>
   )
}

export default UrlForm