import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, updateContact } from "./contactSlice";
import EditContactModal from "./EditContactModal";

export default function ContactsList() {
    const contacts = useSelector(state => state.contacts.list);
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);

    return (
        <div>
            {contacts.map(c => (
                <div key={c.id}>
                    <span>{c.name} | {c.position} | {c.phone}</span>
                    <button onClick={() => setEditId(c.id)}>✏️</button>
                    <button onClick={() => dispatch(deleteContact(c.id))}>🗑</button>
                </div>
            ))}

            {editId && (
                <EditContactModal
                    contact={contacts.find(c => c.id === editId)}
                    onClose={() => setEditId(null)}
                    onSave={(data) => {
                        dispatch(updateContact({ id: editId, data }));
                        setEditId(null);
                    }}
                />
            )}
        </div>
    );
}
