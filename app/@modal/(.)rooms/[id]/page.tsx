import { Modal } from "../../modal";
import { RoomId, rooms } from "@/db/rooms";

export default function Page({ params: { id } }: { params: { id: RoomId } }) {
  return <Modal id={id} data={rooms} isRoom={true}></Modal>;
}
