import './RegisterForm.css';
import React, { useState } from 'react';
import { saveAs } from 'file-saver';

function RegisterForm({ ref }) {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userDataLog, setUserDataLog] = useState([]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleRegister = () => {
        const userData = {
            'name': name,
            'phone': phoneNumber,
        };

        console.log(userData);

        // Make a POST request to the API endpoint
        fetch('https://go-example-api.onrender.com/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the server
                alert('Register successfully');
                // Optionally, you can update the state or perform other actions here
            })
            .catch(error => {
                alert('Error');
                // Handle errors here
            });
    }

    return (
        <div ref={ref} className="register_form_wrapper">
            <form className="register_form_inner">
                <h2 className="register_form_heading">
                    Tạo Tài Khoản Quảng Cáo
                </h2>
                <label className='register_form_label'>Họ tên</label>
                <input type="text" className="register_form_input" value={name} onChange={handleNameChange} placeholder="Vui lòng nhập họ và tên" />
                <label className='register_form_label'>Số điện thoại</label>
                <input type="text" className="register_form_input" value={phoneNumber} onChange={handlePhoneNumberChange} placeholder="Vui lòng nhập số điện thoại" />
                <button type="button" className='register_form_button' onClick={handleRegister}>Đăng ký</button>
            </form>
        </div>
    );
}

export default RegisterForm;
