import { useDispatch } from "react-redux";
import { clearAllContacts } from "./contactSlice";

export default function ClearAllButton() {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(clearAllContacts())}>Очистить все контакты</button>;
}
