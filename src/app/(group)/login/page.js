'use client'
import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const _clearData = () => {
        setEmail('');
        setPassword('');
    }

    const _handleLogin =  (e) => {
        e.preventDefault();
        try {
            const user = {
                email,
                password
            }
            console.log(user);
            _clearData()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex justify-center items-center h-[100vh] ">
            <div className="w-[340px] h-[350px] shadow-lg">
                <form className="p-10" onSubmit={_handleLogin}>
                <p className="pt-2 text-lg font-bold flex justify-center">ປ້ອນຂໍ້ມູນຂອງທ່ານ</p>
                    {/* <label>user name</label><br/> */}
                    <div className="mt-14">
                        <input
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            className="border rounded px-2 py-1 text-md" placeholder="ອີເມວ" />
                        <input
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            className="border rounded px-2 py-1 my-2" placeholder="ລະຫັດ" />
                    </div>
                    <div className="mt-14 flex justify-end mr-3">
                        <button className="px-4 py-2 rounded text-white bg-teal-500" onClick={(e) => { _handleLogin(e) }}>ເຂົ້າສູ່ລະບົບ</button>
                   </div>
                </form>
            </div>
        </div>
    )
}

export default Login