export type TLaunchState = {
  isLoading: boolean;
  data: TLaunch[];
};

export type TLaunch = {
  flightNumber: number;
  date: number;
  launchYear: number;
  missionName: string;
  rocketName: string;
};

export type TOrder = "asc" | "desc";

type TSorting = {
  order: string;
  year: number | string;
  setOrder?: (type: TOrder) => void;
  setYear?: (type: number | string) => void;
};

export type TContextState = {
  launches: TLaunchState;
  refreshData?: () => Promise<void>;
  sorting: TSorting;
};
