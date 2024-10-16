import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { User } from "@/entities/user";
import { useAppSelector } from "@/shared/model/hooks";
import { Button, Input, TextArea } from "@/shared/ui";
import { userProfileFields } from "../model/userProfileFields";
import { useUserProfile } from "../model/useUserProfile";
import styles from "./UserProfile.module.scss";

function UserProfile() {
  const { id } = useParams<{ id: string }>();
  const { users } = useAppSelector(state => state.users);
  const user = useAppSelector(state =>
    state.users.users.find(user => user.id === id),
  );
  const { handleUpdateUser, isEditing, handleEdit, errors, handleErrors } =
    useUserProfile(id || "");

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className={styles.container}>
      {user ? (
        <>
          <div className={styles.header}>
            <h3>Профиль пользователя</h3>
            <Button variant="primary" onClick={handleEdit}>
              Редактировать
            </Button>
          </div>
          <form onSubmit={handleUpdateUser} action="POST">
            <ul className={styles.fieldsList}>
              {Object.entries(userProfileFields)
                .slice(0, -1)
                .map(([key, value]) => (
                  <li key={key}>
                    <label>{value}</label>
                    <Input
                      name={key}
                      defaultValue={user[key as keyof User] || ""}
                      disabled={!isEditing}
                      danger={!!errors[key]}
                      onChange={handleErrors}
                    />
                  </li>
                ))}
              <li key={userProfileFields.comment}>
                <label>{userProfileFields.comment}</label>
                <TextArea
                  name={userProfileFields.comment}
                  defaultValue={
                    user[userProfileFields.comment as keyof User] || ""
                  }
                  disabled={!isEditing}
                />
              </li>
            </ul>
            <Button
              type="submit"
              variant={isEditing ? "secondary" : "muted"}
              className={styles.editButton}>
              Отправить
            </Button>
          </form>
        </>
      ) : (
        <h3 className={styles.notFound}>Пользователь не найден</h3>
      )}
    </div>
  );
}

export { UserProfile };
