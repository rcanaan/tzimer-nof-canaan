// "use client";
// import { useState } from "react";

import { OutdoorId, outdoors } from "@/db/outdoors";
import { Modal } from "../../modal";

export default function Page({
  params: { id },
}: {
  params: { id: OutdoorId };
}) {
  return <Modal id={id} data={outdoors} isRoom={false}></Modal>;
}
