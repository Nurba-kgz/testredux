import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/RegistrationSlices";

const Registration = () => {
    const persons = useSelector(state => state.register);
    const [errorMessage, setErrorMessage] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const dispatch = useDispatch();

    const usersData = (data) => {

        const  registered  =  persons.some((user , data)=> user.name=== data.name)
        if (registered) {
            setErrorMessage('Пользователь уже занят');
        } else if (data.password === data.confirmPassword) {
            dispatch(getUsers(data));
            setErrorMessage('')
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit(usersData)}>
                <input
                    type="text"
                    placeholder='name'
                    {...register('name', { required: true })}
                />
                {errors.name && <span>Это поле обязательно для ввода</span>}
                <input
                    type="password"
                    placeholder='password'
                    {...register('password', { required: true })}
                />
                {errors.password && <span>Это поле обязательно для ввода</span>}
                <input
                    type="password"
                    placeholder='confirm password'
                    {...register('confirmPassword', { required: true })}
                />
                {errors.confirmPassword && <span>Это поле обязательно для ввода</span>}
                <input type="submit" />
            </form>
            {errorMessage && <p>{errorMessage}</p>}
            {persons && persons.map((user, idx) => (
                <div key={idx}>
                    <h1>name: {user.name}</h1>
                    <p>password: {user.password}</p>

                </div>
            ))}
        </div>
    );
};

export default Registration;