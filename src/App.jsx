import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Favorites from "./pages/Favorites";
import WeatherDetails from "./pages/WeatherDetails";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <WeatherDetails /> },
      { path: "/favorites", element: <Favorites /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
