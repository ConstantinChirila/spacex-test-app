import React, {
  Fragment,
  ReactElement,
  useContext,
  ChangeEvent,
  useState,
  useEffect,
} from "react";
import { LaunchItem, LaunchesContext, TLaunch } from "..";
import { Button } from "../Button";
import { StyledList, StyledButtonArea } from "./launch-list.styled";

export function LaunchList(): ReactElement {
  const {
    launches: { data, isLoading },
    sorting: { order, year, setOrder, setYear },
  } = useContext(LaunchesContext);

  const [lunchList, setLunchList] = useState<TLaunch[]>([]);

  useEffect(() => {
    const copy = JSON.parse(JSON.stringify(data));
    if (order === "asc") {
      setLunchList(copy.sort(setAscending));
    }
    if (order === "desc") {
      setLunchList(copy.sort(setDescending));
    }
    if (year && year !== "all") {
      console.log(year);
      setLunchList(
        copy.filter((a: TLaunch) => a.launchYear.toString() === year)
      );
    }
  }, [data, order, year]);

  function onToggleType() {
    if (setOrder) {
      order === "asc" ? setOrder("desc") : setOrder("asc");
    }
  }

  function onChangeYear(e: ChangeEvent<HTMLSelectElement>) {
    if (setYear) {
      setYear(e.target.value);
    }
  }

  function generateList(launches: TLaunch[]): ReactElement | ReactElement[] {
    if (!isLoading) {
      if (launches.length > 0) {
        return launches.map((launch) => {
          return (
            <LaunchItem
              key={launch.flightNumber}
              position={launch.flightNumber}
              title={launch.missionName}
              date={launch.date}
              type={launch.rocketName}
            />
          );
        });
      } else {
        return <p>No Launches Found</p>;
      }
    } else {
      return <p>LOADING Launches</p>;
    }
  }

  const years = [...new Set(data.map((item) => item.launchYear))];
  return (
    <StyledList>
      <StyledButtonArea>
        <select name="" onChange={onChangeYear}>
          <option value="all">All</option>
          {years.map((year) => (
            <option value={year}>{year}</option>
          ))}
        </select>
        <Button onClick={onToggleType}>
          Sort{" "}
          {order === "desc" ? (
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
      {generateList(lunchList)}
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

function setDescending(a: TLaunch, b: TLaunch) {
  if (a.flightNumber > b.flightNumber) {
    return -1;
  }
  if (a.flightNumber < b.flightNumber) {
    return 1;
  }
  return 0;
}

function setAscending(a: TLaunch, b: TLaunch) {
  if (a.flightNumber < b.flightNumber) {
    return -1;
  }
  if (a.flightNumber > b.flightNumber) {
    return 1;
  }
  return 0;
}
