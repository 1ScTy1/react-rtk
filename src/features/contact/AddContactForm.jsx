import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addContact} from "./contactSlice";

export default function AddContactForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [phone, setPhone] = useState("");

    const handleAdd = () =>{
        if (!name.trim() || !position.trim() || !phone.trim()) {
            alert("Заполните все поля");
            return;
        }

        const phoneRegex = /^\+?\d{9,15}$/;
        if (!phoneRegex.test(phone)) {
            alert("Некорректный номер телефона");
            return;
        }
        dispatch(addContact({ name, position, phone }));
        setName(""); setPosition(""); setPhone("");
    }
    return (
        <>
            <div>
                <input placeholder="Имя" value={name} onChange={e => setName(e.target.value)} />
                <input placeholder="Должность" value={position} onChange={e => setPosition(e.target.value)} />
                <input placeholder="Телефон" value={phone} onChange={e => setPhone(e.target.value)} />
                <button onClick={handleAdd}>Добавить контакт</button>
            </div>
        </>
    )
}