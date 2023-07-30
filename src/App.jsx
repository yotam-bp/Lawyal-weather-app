import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Favorites from "./pages/Favorites";
import WeatherDetails from "./pages/WeatherDetails";

const router = createBrowserRouter([
  { path: "/", element: <WeatherDetails /> },
  { path: "/favorites", element: <Favorites /> },
]);

function App() {
  return (
    <>
      <h1>weather app</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
