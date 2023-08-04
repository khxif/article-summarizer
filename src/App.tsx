import Body from "./components/Body";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <div className="bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 w-screen h-screen
      opacity-50 absolute -z-50 filter blur-3xl" />
      <Header />
      <Body />
    </>
  )
}
