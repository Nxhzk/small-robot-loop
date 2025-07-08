import type { JSX } from "react";
import RobotLoop from "./robot-loop/index";
import { useSelector } from "react-redux";
import type { IState } from "@src/store";

const robotsMapName: RobotsMapName = {
  loop: RobotLoop,
};

const Robots = () => {
  const { robotsName } = useSelector((state: IState) => state);

  const Robot = robotsMapName[robotsName] || null;

  return <Robot />;
};

export default Robots;

interface RobotsMapName {
  loop: () => JSX.Element;
}
