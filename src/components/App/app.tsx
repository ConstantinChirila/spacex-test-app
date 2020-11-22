import React, { useState, createContext, useEffect } from "react";
import { Header, Content } from "../index";
import { config } from "./../../config";

export type TLaunchState = {
  isLoading: boolean;
  data: TLaunch[];
};

export type TLaunch = {
  flightNumber: number;
  dateUnix: number;
  launchYear: number;
  missionName: string;
  rocketName: string;
};

export type TContextState = {
  launches: TLaunchState;
  refreshData?: () => Promise<void>;
};

export const LaunchesContext = createContext<TContextState>({
  launches: {
    isLoading: true,
    data: [],
  },
  refreshData: async () => {},
});

export function App() {
  const [launches, setLaunches] = useState<TLaunchState>({
    isLoading: true,
    data: [],
  });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(config.API);
    const data = await response.json();
    console.log(data);

    const mappedData = data.map(
      ({
        flight_number,
        launch_date_unix,
        launch_year,
        mission_name,
        rocket,
      }: any) => ({
        flightNumber: flight_number,
        dateUnix: launch_date_unix,
        launchYear: launch_year,
        missionName: mission_name,
        rocketName: rocket.rocket_name,
      })
    ) as TLaunch[];

    setLaunches({
      isLoading: false,
      data: mappedData,
    });
  }

  return (
    <LaunchesContext.Provider
      value={{
        launches,
        refreshData: getData,
      }}
    >
      <Header />
      <Content />
    </LaunchesContext.Provider>
  );
}
