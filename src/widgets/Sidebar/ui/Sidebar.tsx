import { SortByButton } from "@/features/user/sortBy";
import styles from "./Sidebar.module.scss";
function Sidebar() {
  return (
    <div className={styles.container}>
      <p>Сортировка</p>
      <SortByButton sortBy="city">по городу</SortByButton>
      <SortByButton sortBy="company">по компании</SortByButton>
    </div>
  );
}

export { Sidebar };
