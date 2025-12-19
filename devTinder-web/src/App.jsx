import Body from "./components/Body";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body/>}>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;