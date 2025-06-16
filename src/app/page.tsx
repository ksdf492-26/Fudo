import Header from "@/include/headerPage";
import MainBanner from "@/pages/MainBanner";
import MainCards from "@/pages/MainCards";

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <MainBanner/>
        <MainCards/>
      </main>
    </>
  );
}
