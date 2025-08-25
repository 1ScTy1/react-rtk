import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from './contactSlice';

const ContactItem = ({ contact, onEdit }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    };

    return (
        <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
            <div>
                <strong>{contact.name}</strong> - {contact.position} - {contact.phone}
            </div>
            <div>
                <button onClick={() => onEdit(contact)}>✏️</button>
                <button onClick={handleDelete}>🗑️</button>
            </div>
        </li>
    );
};

export default ContactItem;
