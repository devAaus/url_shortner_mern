import { LinkIcon } from 'lucide-react'
import React from 'react'

export const Footer = () => {
   return (
      <footer className="border-t py-6">
         <div className="px-4">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
               <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-primary p-1">
                     <LinkIcon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="font-bold">ShortLink</span>
               </div>
               <div className="text-sm ">
                  &copy; {new Date().getFullYear()} ShortLink. All rights reserved.
               </div>
            </div>
         </div>
      </footer>
   )
}
