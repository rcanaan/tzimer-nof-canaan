export type RoomId = (typeof roomIds)[keyof typeof roomIds]; // Type for the keys of roomIds
type RoomDetails = {
  imageSrc: string;
  pageTitle: string;
  description: string;
};

export type Rooms = typeof rooms;

export const roomIds = {
  SUITE_ROOM: "Suite",
  PANORAMIC_ROOM: "Panoramic",
  WESTERN_ROOM: "Western",
} as const;

export const rooms = {
  [roomIds.SUITE_ROOM]: {
    imageSrc: "/suiteLivingRoom.jpg",
    pageTitle: "Suite Room",
    description:
      "An 89m heated infinity pool with breathtaking views over the valley.",
  },
  [roomIds.PANORAMIC_ROOM]: {
    imageSrc: "/panoramicRoomView.jpg",
    pageTitle: "Panoramic Room",
    description:
      "An 89m heated infinity pool with breathtaking views over the valley.",
  },
  [roomIds.WESTERN_ROOM]: {
    imageSrc: "/panoramicBalcony.jpg",
    pageTitle: "Western Room",
    description:
      "An 89m heated infinity pool with breathtaking views over the valley.",
  },
};
