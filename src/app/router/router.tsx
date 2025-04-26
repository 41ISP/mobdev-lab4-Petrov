import { createBrowserRouter } from "react-router-dom";
import SearchPage from "../../pages/SearchPage/SearchPage"
import RealTimePage from "../../pages/RealTimePage/RealTimePage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <SearchPage/>
    },
    {
        path: 'RealTimePage',
        element: <RealTimePage/>
    }
])

export default router