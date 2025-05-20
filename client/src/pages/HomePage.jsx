import { Card, CardContent } from "@/components/ui/card";
import UrlForm from "@/components/UrlForm";


export default function HomePage() {
   return (
      <main className="flex-1">
         <section className="py-16">
            <div className="container mx-auto px-4">
               <div className="mx-auto max-w-3xl text-center">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                     Shorten your links, <span className="text-primary">expand your reach</span>
                  </h1>
                  <p className="mt-6 text-lg text-gray-600">
                     Create short, memorable links in seconds. Track clicks and manage all your links in one place.
                  </p>
               </div>

               <Card className="mx-auto mt-10 max-w-2xl">
                  <CardContent>
                     <UrlForm />
                  </CardContent>
               </Card>
            </div>
         </section>
      </main>
   )
}
