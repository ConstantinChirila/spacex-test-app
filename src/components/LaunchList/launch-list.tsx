import React, { ReactElement, useContext } from "react";
import { LaunchItem, LaunchesContext } from "..";
import { StyledList } from "./launch-list.styled";

export function LaunchList(): ReactElement {
  const {
    launches: { data, isLoading },
  } = useContext(LaunchesContext);

  console.log(isLoading);
  if (isLoading) {
    return <p>Currently LOADING</p>;
  }
  return (
    <StyledList>
      {data.length > 0
        ? data.map((launch) => (
            <LaunchItem
              position={launch.flightNumber}
              title={launch.missionName}
              date={launch.dateUnix.toString()}
              type={launch.rocketName}
            />
          ))
        : "No Launches Found"}
    </StyledList>
  );
}
