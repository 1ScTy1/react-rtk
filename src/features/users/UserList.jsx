import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "./usersSlice";

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.list);
    const status = useSelector((state) => state.users.status);
    const error = useSelector((state) => state.users.error);

    useEffect(() => {
        if (status === "idle") {
            dispatch(getUsers());
        }
    }, [status, dispatch]);
    if (status === 'loading') return <p>Загрузка...</p>;
    if (status === 'failed') return <p>Ошибка: {error}</p>;

    return (
        <div>
            <h2>Список пользователей:</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>

    )
}

export default UserList;