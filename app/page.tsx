import Outdoor from "../components/OutdoorCards";
// import { rooms } from "../db/rooms";
import { outdoors } from "../db/outdoors";
import RoomCards from "../components/RoomCards";
import Video from "../components/Video";

export default function Home() {
  return (
    <>
      <RoomCards />
      <Outdoor outdoors={outdoors} />
      <Video />
    </>
  );
}
