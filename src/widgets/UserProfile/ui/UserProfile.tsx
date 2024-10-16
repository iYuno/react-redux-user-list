import { useParams } from "react-router-dom";
import { User } from "@/entities/user";
import { useAppSelector } from "@/shared/model/hooks";
import { Button, Input } from "@/shared/ui";
import { userProfileFields } from "../model/userProfileFields";
import styles from "./UserProfile.module.scss";

function UserProfile() {
  const { id } = useParams<{ id: string }>();

  const user = useAppSelector(state =>
    state.users.users.find(user => user.id === id),
  );

  if (!user) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Профиль пользователя</h3>
        <Button variant="primary">Редактировать</Button>
      </div>
      <form className={styles.profileForm}>
        {Object.entries(userProfileFields).map(([key, value]) => (
          <div key={key}>
            <label>{value}</label>
            <Input value={user[key as keyof User] || ""} disabled />
          </div>
        ))}
      </form>
      <Button variant="muted" className={styles.editButton}>
        Редактировать
      </Button>
    </div>
  );
}

export { UserProfile };
