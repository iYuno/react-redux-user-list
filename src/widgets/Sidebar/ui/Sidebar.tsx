import { Button } from "@/shared/ui";
import styles from "./Sidebar.module.scss";
function Sidebar() {
  return (
    <div className={styles.container}>
      <p>Сортировка</p>
      <Button variant="primary">по городу</Button>
      <Button variant="primary">по компании</Button>
    </div>
  );
}

export { Sidebar };
