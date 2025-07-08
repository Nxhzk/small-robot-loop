import { useEffect, type JSX } from "react";
import { getQueryParams } from "@src/utils/query";
import { useDispatch } from "react-redux";
import styles from "./index.module.scss";
import { useEyeInfo } from "../hooks/face";

const Initialize = ({ children }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const query: Query = getQueryParams();
    dispatch({
      type: "SET_STATE",
      payload: {
        ...query,
      },
    });
  }, []);

  useEyeInfo();

  return <div className={styles.container}>{children}</div>;
};

export default Initialize;

interface Props {
  children: JSX.Element;
}

interface Query {
  [key: string]: any;
}
