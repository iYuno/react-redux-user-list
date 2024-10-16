import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/widgets/Sidebar";
import { fetchUsers } from "@/entities/user";
import { useAppDispatch } from "@/shared/model/hooks";
import styles from "./BaseLayout.module.scss";

export function BaseLayout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <Sidebar />
      <Outlet />
    </div>
  );
}
