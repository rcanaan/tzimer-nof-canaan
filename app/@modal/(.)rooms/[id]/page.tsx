import { Modal } from "./modal";
import { RoomId } from "@/db/rooms";

export default function Page({ params: { id } }: { params: { id: RoomId } }) {
  return <Modal>{id}</Modal>;
}
