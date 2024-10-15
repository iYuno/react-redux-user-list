import { Outlet } from "react-router-dom";
import styles from "./BaseLayout.module.scss";

export function BaseLayout() {
  return (
    <div className={styles.root}>
      <Outlet />
    </div>
  );
}
