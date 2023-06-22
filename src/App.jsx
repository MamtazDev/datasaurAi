import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { AuthContext } from "./contexts/AuthProvider";

function App() {
  const { user, setUser, reviews, setReviews, setCompletion } =
    useContext(AuthContext);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("dataSaurAuth");
    if (auth) {
      const usr = JSON.parse(auth);
      setUser(usr);

      fetch(`http://localhost:8000/api/reviews/${usr.email}`)
        .then((res) => res.json())
        .then((data) => setReviews(data.reviews));

      fetch(`http://localhost:8000/api/completions/${usr.email}`)
        .then((res) => res.json())
        .then((data) => setCompletion(data.completions));
    }

    setAuth(true);
  }, []);

  return <>{!auth ? "" : <RouterProvider router={router} />}</>;
}

export default App;
