import React, { useState, createContext, useEffect } from "react";
import { Header, Content } from "../index";
import { config } from "./../../config";
import { TLaunchState, TLaunch, TOrder, TContextState } from "./app.types";

export const LaunchesContext = createContext<TContextState>({
  launches: {
    isLoading: true,
    data: [],
  },
  refreshData: async () => {},
  sorting: {
    order: "asc",
    year: "all",
  },
});

export function App() {
  const [launches, setLaunches] = useState<TLaunchState>({
    isLoading: true,
    data: [],
  });

  const [sortByDate, setSortByDate] = useState<TOrder>("asc");
  const [sortByYear, setSortByYear] = useState<number | string>("all");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLaunches({
      isLoading: true,
      data: [],
    });
    try {
      const response = await fetch(config.API);
      const data = await response.json();
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
    } catch (error) {
      console.error(error);
      setLaunches({
        isLoading: false,
        data: [],
      });
    }
  }

  return (
    <LaunchesContext.Provider
      value={{
        launches,
        refreshData: getData,
        sorting: {
          order: sortByDate,
          year: sortByYear,
          setOrder: setSortByDate,
          setYear: setSortByYear,
        },
      }}
    >
      <Header />
      <Content />
    </LaunchesContext.Provider>
  );
}
