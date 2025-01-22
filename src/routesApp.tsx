import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./pages/notFound";
import WelcomePage from "./pages/welcomePage";
import MainPages from "./pages/mainPage";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<WelcomePage />} />
                <Route path="toDo" element={<MainPages />}/>
            </Routes>
        </BrowserRouter>
    )
};

export default RoutesApp;
