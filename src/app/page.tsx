// index.tsx
import { GlobalContextProvider } from "./Context/store";
import HomePage from "./initial/page";


export default function Home() {
  return (
    <GlobalContextProvider>
      <HomePage></HomePage>
    </GlobalContextProvider>
  );
}
