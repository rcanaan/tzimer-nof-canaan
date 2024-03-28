// "use client";
// import { useState } from "react";
import { Modal } from "./modal";
import { RoomId } from "@/db/rooms";

// export default function Page({ params }: { params: { id: string } }) {
//   const [isModalOpen, setIsModalOpen] = useState(true); // Assuming you want the modal to be open by default

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };
//   console.log(`Is modal open: ${isModalOpen}`);
//   <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//     {params.id}
//   </Modal>;
// }
export default function Page({ params: { id } }: { params: { id: RoomId } }) {
  return <Modal>{id}</Modal>;
}
