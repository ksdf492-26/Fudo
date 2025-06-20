import Banner from '@/pages/MainBanner'
import Cards from '@/pages/MainCards'
import Menu from '@/pages/MainMenu'
import Review from '@/pages/MainReview'
import DownloadApp from '@/pages/MainDownloadApp'

import { Pages } from '@/types/Pages'

const Page: Pages[] = [
    { page: "Banner" },
    { page: "Cards" },
    { page: "Menu" },
    { page: "Review" },
    { page: "DownloadApp" }
]

// Mapeia string => componente real
const ComponentsMap: Record<string, React.ElementType> = {
    Banner,
    Cards,
    Menu,
    Review,
    DownloadApp
}

function Index() {
    return (
        <main>
            {
                Page.map((item, i) => {
                    const Component = ComponentsMap[item.page]
                    return Component ? <Component key={i} /> : null
                })
            }
        </main>
    )
}

export default Index
