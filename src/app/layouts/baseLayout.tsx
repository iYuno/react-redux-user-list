import { Outlet } from "react-router-dom";
import styles from "./BaseLayout.module.css";

export function BaseLayout() {
  return (
    <div className={styles.root}>
      <Outlet />
    </div>
  );
}
