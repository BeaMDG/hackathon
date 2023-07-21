
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from '../pages/landingPage/LandingPage';

const RouterItem = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<LandingPage />}></Route>
                <Route path="/detail" element= {<DetailPage />}></Route>
                <Route path="*" element= {<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
};
export default RouterItem;