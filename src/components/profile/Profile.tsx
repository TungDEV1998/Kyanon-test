import React, { useState } from 'react'
import Styles from './Profile.module.css'

type Props = {}

export default function Profile({ }: Props) {
    const [userName, setUserName] = useState<string>()
    const [userDob, setUserDob] = useState<string>()
    const [userEmail, setUserEmail] = useState<string>()
    const [userPhone, setUserPhone] = useState<string>()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("handleSubmit", userName, userDob, userEmail, userPhone);
        updateUser(userName, userDob, userEmail, userPhone);
        alert('Cập nhật thành công')
    };

    const updateUser = (name: string | undefined, date: string | undefined, email: string | undefined, phone: string | undefined) => {
        const data = {
            name: name,
            date: date,
            email: email,
            phone: phone,
        };
        const url = 'https://63758f5b48dfab73a4fb0332.mockapi.io/users/1'
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setUserName(e.target.value);
    };
    const handleChangeUserDay = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setUserDob(e.target.value);
    };

    const handleChangeUserMail = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setUserEmail(e.target.value);
    };

    const handleChangeUserPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setUserPhone(e.target.value);
    };

    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className={Styles.titlecontainer}>
                    <h1>Profile</h1>
                </div>
                <label style={{ color: 'blue' }}>Full name:</label>
                <input type="text" id="name" name="name" onChange={handleChangeUserName} />

                <label style={{ color: 'blue' }}>Day of birth:</label>
                <input type="text" id="date" name="date" onChange={handleChangeUserDay} />

                <label style={{ color: 'blue' }}>Email:</label>
                <input type="email" id="email" name="email" onChange={handleChangeUserMail} />

                <label style={{ color: 'blue' }}>Phone:</label>
                <input type="tel" id="phone" name="phone" onChange={handleChangeUserPhone} />

                <span>
                    <button type='submit' className={Styles.button1} >Update</button>
                    <button type='reset' className={Styles.button2} >Cancel</button>
                </span>
            </form>
        </>
    )
}