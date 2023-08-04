import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='flex items-center justify-between py-4 px-4 md:py-6 md:px-20 w-full'>
        <img 
        src="/logo.png" 
        alt="logo"
        className='w-40 md:w-56'
        />
        <button 
        className="bg-[#993399] text-white font-medium md:font-bold py-2.5 md:py-3 px-6
         rounded-full hover:bg-opacity-80 text-center"
         >
          <a href="https://github.com/khxif/article-summarizer">
          Give a ⭐
          </a>
        </button>
    </header>
  )
}
