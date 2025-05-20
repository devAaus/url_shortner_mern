import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { Link, Check, Copy } from "lucide-react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { createShortUrl } from "@/api/url.api"


function UrlForm() {
   const [url, setUrl] = useState("");
   const [copied, setCopied] = useState(false);

   const {
      mutate: shortenUrl,
      data: shortUrl,
      isPending: loading,
   } = useMutation({
      mutationFn: createShortUrl,
      onSuccess: () => {
         setUrl("");
      },
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!url) return;
      shortenUrl(url);
   };

   const copyToClipboard = () => {
      if (!shortUrl) return;

      navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
   };

   return (
      <>
         <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
               <Link className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
               <Input
                  type="url"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste your long URL here"
                  className="pl-10"
                  required
               />
            </div>
            <Button type="submit" disabled={loading}>
               {loading ? "Shortening..." : "Shorten URL"}
            </Button>
         </form>

         {shortUrl && (
            <div className="mt-6 space-y-2">
               <p className="text-sm font-medium text-gray-500">
                  Your shortened URL:
               </p>
               <div className="flex items-center gap-2">
                  <Input value={shortUrl} readOnly className="bg-background" />
                  <Button
                     size="icon"
                     variant="outline"
                     onClick={copyToClipboard}
                     className="flex-shrink-0"
                  >
                     {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
               </div>
            </div>
         )}
      </>
   );
}

export default UrlForm;
