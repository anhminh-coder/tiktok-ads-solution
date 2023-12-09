import './CreateButton.css';
import React from 'react';

function CreateButton({ onClick }) {
    return (
        <button onClick={onClick} className="create_button">
            <p className="create_button_text">
                Tạo tài khoản ngay
            </p>
        </button>
    );
}

export default CreateButton;