// index.tsx
import HomePage from "@/app/index/page";
import { GlobalContextProvider } from "./Context/store";


export default function Home() {
  return (
    <GlobalContextProvider>
      <HomePage></HomePage>
    </GlobalContextProvider>
  );
}
