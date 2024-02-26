export type OutdoorId = (typeof outdoorIds)[keyof typeof outdoorIds]; // Type for the keys of roomIds
export type OutdoorDetails = {
  imageSrc: string;
  pageTitle: string;
  description: string;
};

export type Outdoors = typeof outdoors;

export const outdoorIds = {
  OUTDOOR_POOL: "OutdoorPool",
  PUBLIC_POOL: "PublicPool",
  NATURE: "Nature",
} as const;

export const outdoors = {
  [outdoorIds.OUTDOOR_POOL]: {
    imageSrc: "/IMG-20240209-WA0091.jpg",
    pageTitle: "Outdoor Pool",
    description: "Outdoor Pool",
  },
  [outdoorIds.PUBLIC_POOL]: {
    imageSrc: "/8920326.jpg",
    pageTitle: "Public Pool",
    description:
      "An 89m heated infinity pool with breathtaking views over the valley.",
  },
  [outdoorIds.NATURE]: {
    imageSrc: "/tamarPool1.jpg",
    pageTitle: "Nature",
    description: "Nature Around",
  },
};
