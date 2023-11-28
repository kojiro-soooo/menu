import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Browse from "./pages/Browse/Browse";
import Create from "./pages/Create/Create";
import Home from "./pages/Home/Home";
import Navbar from "./components/ui/Navbar";
import Recipe from "./pages/Recipe/Recipe";
import About from "./pages/About/About";
import Footer from "./components/ui/Footer"
import Profile from "./pages/Profile/Profile";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import UnauthorizedAccess from "./pages/UnauthorizedAccess/UnauthorizedAccess";
import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";

function App() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        isAuthenticated ? (
            <div className="App">
                <Router>
                    <div className="app-container">
                    <Navbar 
                        userFullName={user.name}
                        userId={user.sub}
                        isAuthenticated={isAuthenticated}
                        isLoading={isLoading}
                        />
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/browse" element={<Browse />}></Route>
                        <Route path="/create" element={<Create 
                            userId={user.sub}
                            isAuthenticated={isAuthenticated}
                            isLoading={isLoading}
                            />}></Route>
                        <Route path="/browse/recipes/:id" element={<Recipe 
                            userFullName={user.name}
                            userId={user.sub}
                            />}></Route>
                        <Route path="/profile/:id" element={<Profile
                            userFullName={user.name}
                            userEmail={user.email}
                            isAuthenticated={isAuthenticated}
                            isLoading={isLoading}
                             />}></Route>
                        <Route path="*" element={<PageNotFound />}></Route>
                    </Routes>
                    <Footer />
                    </div>
                </Router>
            </div>

        ) : (
            <div className="App">
                <Router>
                    <div className="app-container">
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/browse" element={<Browse />}></Route>
                        <Route path="/create" element={<UnauthorizedAccess />}></Route>
                        <Route path="/browse/recipes/:id" element={<Recipe />}></Route>
                        <Route path="/profile" element={<UnauthorizedAccess/>}></Route>
                        <Route path="*" element={<PageNotFound />}></Route>
                    </Routes>
                    <Footer />
                    </div>
                </Router>
        </div>
        )
    );
}

export default App;
