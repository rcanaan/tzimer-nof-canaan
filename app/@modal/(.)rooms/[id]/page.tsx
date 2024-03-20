import { Modal } from "./modal";

export default function Page({ params }: { params: { id: string } }) {
  return <Modal>{params.id}</Modal>;
}
