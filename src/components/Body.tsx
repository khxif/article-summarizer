import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import InputLink from "./InputLink";
import copy from "copy-to-clipboard";
import { useState } from 'react'
import Loading from "./Loading";

export default function Body() {

  const[url,setUrl] = useState('')
  const[summary,setSummary] = useState('')
  const[urlCache,seturlCache] = useState<string[]>([])
  const[loading,setLoading] = useState<boolean>(false)
  
  return (
    <main className="px-4 md:px-20 py-3 md:py-8 flex flex-col space-y-2 md:space-y-5 items-center w-full justify-center text-center">
      <div className="flex flex-col  text-center space-y-2">
      <h1 className="text-transparent bg-clip-text font-bold text-3xl md:text-4xl bg-gradient-to-r
       from-purple-500 to-pink-600">
        Get Any Article's Summary.
      </h1>
      <h2 className="hidden md:block text-black font-bold text-xl md:text-2xl">
        Powered by (GPT-4)
      </h2>
      </div>
      <h4 className="text-lg text-gray-500 font-medium md:max-w-[80%] md:mb-4">
      Say goodbye to lengthy articles and hello to simplified reading with Brief.Ai
       - the open-source article summarizer. Transform complex information into clear and 
       concise summaries and enjoy an enhanced reading experience.
      </h4>
      <div className="space-y-4">
        <InputLink url={url} setUrl={setUrl} setSummary={setSummary} 
        setUrlCache={seturlCache} setLoading={setLoading} />
        
        <div className="flex flex-col space-y-4  overflow-visible">
        {
          urlCache?.map( url => (
            <div key={url} 
            className="p-4 rounded-md bg-white flex items-center space-x-2 flex-1">
            <ClipboardDocumentIcon
             onClick={() =>copy(url)}
             className="h-6 w-6 text-gray-600 cursor-pointer"
             />
            <h1 className="text-blue-700 font-semibold overflow-hidden md:overflow-visible  max-w-[16rem] md:max-w-6xl">
              {url}
            </h1>
           </div>
          ))
        }
        {
          loading && (
            <Loading />
          )
        }
        </div>
        <div>
          {
            summary && (
              <div className="flex flex-col space-y-3">
              <h2 className="text-blue-600 font-bold text-2xl">Summary :</h2>
              <div className="px-4 py-2 bg-white/30">
                <h4 className="text-black/50 font-medium">
                  {summary}
                </h4>
              </div>
              </div>
            )
          }
        </div>
      </div>
    </main>
  )
}
