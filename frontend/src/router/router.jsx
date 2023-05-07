import { CreateRoomPage } from "../Views/CreateRoomPage/CreateRoomPage";
import { Home } from "../Views/Home/Home";
import { RoomJoinPage } from "../Views/RoomJoinPage/RoomJoinPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <CreateRoomPage />,
  },
  {
    path: "/join",
    element: <RoomJoinPage />,
  },
]);

export { router };
