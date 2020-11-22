import React, { useState, createContext, useEffect } from "react";
import { Header, Content } from "../index";
import { config } from "./../../config";

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

type TSort = "asc" | "desc";

export type TContextState = {
  launches: TLaunchState;
  refreshData?: () => Promise<void>;
  sorting: { set?: (type: TSort) => void; type: TSort };
};

export const LaunchesContext = createContext<TContextState>({
  launches: {
    isLoading: true,
    data: [],
  },
  refreshData: async () => {},
  sorting: {
    type: "asc",
  },
});

export function App() {
  const [launches, setLaunches] = useState<TLaunchState>({
    isLoading: true,
    data: [],
  });

  const [sortByDate, setSortByDate] = useState<TSort>("asc");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData(sortByDate);
  }, [sortByDate]);

  async function getData(sort = "asc") {
    setLaunches({
      isLoading: true,
      data: [],
    });
    const response = await fetch(config.API + "/?order=" + sort);
    const data = await response.json();
    console.log(data);
    const mappedData = data.map(
      ({
        flight_number,
        launch_date_utc,
        launch_year,
        mission_name,
        rocket,
      }: any) => ({
        flightNumber: flight_number,
        date: launch_date_utc,
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
        sorting: {
          type: sortByDate,
          set: setSortByDate,
        },
      }}
    >
      <Header />
      <Content />
    </LaunchesContext.Provider>
  );
}
