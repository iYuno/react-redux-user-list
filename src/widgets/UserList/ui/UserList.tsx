import { useAppSelector } from "@/shared/model/hooks";
import styles from "./UserList.module.scss";
function UserList() {
  const { users, loading } = useAppSelector(state => state.users);

  return (
    <div className={styles.container}>
      <h3>Список пользователей</h3>
      {!loading ? (
        <ul className={styles.userList}>
          {users.map(({ id, name, city, company }) => (
            <li key={id}>
              <p>
                <span className={styles.label}>ФИО: &nbsp;</span>
                {name}
              </p>
              <p>
                <span className={styles.label}>город: &nbsp;</span>
                {city}
              </p>
              <div className={styles.bottomWrapper}>
                <p>
                  <span className={styles.label}>компания: &nbsp;</span>
                  {company}
                </p>
                <a href={`react-redux-user-list/user/${id}`}>Подробнее</a>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>loading</p>
      )}
      <p className={styles.usersCount}>Найдено {users.length} пользователей</p>
    </div>
  );
}

export { UserList };
