import Header from "@/include/headerPage";
import MainBanner from "@/pages/MainBanner";
import MainCards from "@/pages/MainCards";
import MainMenu from '@/pages/MainMenu'


import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <MainBanner/>
        <MainCards/>
        <MainMenu/>
      </main>
    </>
  );
}
