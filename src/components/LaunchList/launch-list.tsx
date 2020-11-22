import React, { Fragment, ReactElement, useContext } from "react";
import { LaunchItem, LaunchesContext } from "..";
import { Button } from "../Button";
import { StyledList, StyledButtonArea } from "./launch-list.styled";

export function LaunchList(): ReactElement {
  const {
    launches: { data, isLoading },
    sorting: { type, set },
  } = useContext(LaunchesContext);

  function toggleType() {
    if (set) {
      type === "asc" ? set("desc") : set("asc");
    }
  }

  return (
    <StyledList>
      <StyledButtonArea>
        <Button onClick={toggleType}>
          Sort{" "}
          {type === "desc" ? (
            <Fragment>
              Descending <Descending />
            </Fragment>
          ) : (
            <Fragment>
              Ascending <Ascending />
            </Fragment>
          )}
        </Button>
      </StyledButtonArea>

      {!isLoading ? (
        data.length > 0 ? (
          data.map((launch) => (
            <LaunchItem
              position={launch.flightNumber}
              title={launch.missionName}
              date={launch.date}
              type={launch.rocketName}
            />
          ))
        ) : (
          "No Launches Found"
        )
      ) : (
        <p>Currently LOADING</p>
      )}
    </StyledList>
  );
}

function Ascending() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      strokeWidth="2"
      stroke="#ffffff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M4 6h7M4 12h7M4 18h9M15 9l3-3 3 3M18 6v12" />
    </svg>
  );
}
function Descending() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M4 6h9M4 12h7M4 18h7M15 15l3 3 3-3M18 6v12" />
    </svg>
  );
}
