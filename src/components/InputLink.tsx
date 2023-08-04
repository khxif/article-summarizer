
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { LinkIcon } from "@heroicons/react/24/solid";
import {getArticle} from "../lib/fetchArticle";

type Props = {
    url: string;
    setUrl: React.Dispatch<React.SetStateAction<string>>;
    setSummary: React.Dispatch<React.SetStateAction<string>>;
    setUrlCache: React.Dispatch<React.SetStateAction<string[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InputLink({url,setUrl,setSummary,setUrlCache,setLoading}: Props) {
    
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        if(url === '') return;

        setLoading(true)
       const data = await getArticle(url)
       setUrlCache( prev => [...prev,url] )
       setUrl('')
       setSummary(data?.data.summary)
       if(!data || data === null) setSummary("Something Went wrong!")
       setLoading(false)
       
    }
  return (
    <form 
    onSubmit={handleSubmit}
    className="flex items-center bg-white p-4 rounded-md space-x-2 mt-6 shadow-xl"
    >
        <LinkIcon className="h-6 w-6 text-gray-600" />
        <input 
        className="p-2 max-w-xs md:max-w-6xl md:w-[30rem] flex-1"
        type="url"
        placeholder="Enter a URL"
        onChange={(e) => setUrl(e.target.value)}
        value={url!}
        />
        <button 
        type="submit"
        className="bg-gray-100 p-2 rounded-md"
        >
            <PaperAirplaneIcon className="h-6 w-6 text-gray-600" />
        </button>
    </form>
  )
}
