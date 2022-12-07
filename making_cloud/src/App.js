import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import SplashPage from "./pages/SplashPage";
import MapPage from "./pages/MapPage";
import MyPage from "./pages/MyPage";
import Settings from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import { useUserContext } from "./contexts/UserContext";
import { useEffect, useState } from "react";
import { auth } from "./Firebase/firebase";

function App() {
  const {user, setUser} = useUserContext();

  useEffect(() => {
    console.log(user);
    if (!user)
      setUser(auth.currentUser);
  }, [user])


  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<SplashPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/map/:id" element={<DetailsPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/map" />} />
        </Routes>
      </Router>
  );
}

export default App;
