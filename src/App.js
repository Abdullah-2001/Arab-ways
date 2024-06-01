import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import ForgetPassword from "./pages/forget-password/forget-password";
import "./App.css";
import Layout from "./layout";
import Messages from "./pages/messages/messages";
import Chat from "./pages/chat/chat";
import Notifications from "./pages/notifications/notifications";
import Profile from "./pages/profile/profile";
import EditProfile from "./pages/profile/edit-profile";
import { LanguageProvider } from "./components/context/language/langContext";
import { useSelector } from "react-redux";
// import Explore from "./pages/explore/explore";

function App() {

    const token = useSelector((state) => state.auth.token)
    const state = useSelector((state) => state)
    console.log("token", token);
    console.log("store", state);

    return (
        <LanguageProvider>
            <Router>
                <Routes>
                    <Route path="/signup" element={token === null ? <Signup /> : <Navigate to="/dashboard" />} />
                    <Route path="/" element={token === null ? <Login /> : <Navigate to="/dashboard" />} />
                    <Route path="/forget-password" element={token === null ? <ForgetPassword /> : <Navigate to="/dashboard" />} />
                    <Route path="/" element={<Layout />}>
                        <Route path="/dashboard" element={!token ? <Home /> : <Navigate to="/" />} />
                        <Route path="/notifications" element={!token ? <Notifications /> : <Navigate to="/" />} />
                        <Route path="/messages" element={!token ? <Messages /> : <Navigate to="/" />} />
                        {/* <Route path="/explore" element={!token ? <Explore /> : <Navigate to="/" />} /> */}
                        <Route path="/chat/:id" element={!token ? <Chat /> : <Navigate to="/" />} />
                        <Route path="/profile" element={!token ? <Profile /> : <Navigate to="/" />} />
                        <Route path="/profile/edit-profile" element={!token ? <EditProfile /> : <Navigate to="/" />} />
                    </Route>
                </Routes>
            </Router>
        </LanguageProvider>
    );
}

export default App;