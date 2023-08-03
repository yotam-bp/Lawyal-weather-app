import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favorites from "./pages/Favorites";
import WeatherDetails from "./pages/WeatherDetails";
import RootLayout from "./pages/RootLayout";
// import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <WeatherDetails /> },
      {
        path: "/weather",
        element: <WeatherDetails />,
        children: [
          {
            path: "/weather/:locationId",
            id: "location-detail",
            element: <WeatherDetails />,
          },
        ],
      },
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
