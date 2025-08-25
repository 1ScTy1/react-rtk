import { useState } from "react";

export default function EditContactModal({ contact, onClose, onSave }) {
    const [name, setName] = useState(contact.name);
    const [position, setPosition] = useState(contact.position);
    const [phone, setPhone] = useState(contact.phone);

    const handleSave = () => {
        if (!name.trim() || !position.trim() || !phone.trim()) {
            alert("Все поля обязательны");
            return;
        }
        const phoneRegex = /^\+?\d{9,15}$/;
        if (!phoneRegex.test(phone)) {
            alert("Некорректный номер телефона");
            return;
        }
        onSave({ name, position, phone });
    };

    return (
        <div className="modal">
            <input value={name} onChange={e => setName(e.target.value)} />
            <input value={position} onChange={e => setPosition(e.target.value)} />
            <input value={phone} onChange={e => setPhone(e.target.value)} />
            <button onClick={handleSave}>Сохранить</button>
            <button onClick={onClose}>Отмена</button>
        </div>
    );
}
