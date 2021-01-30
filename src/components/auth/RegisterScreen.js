import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { removeError, setError } from '../../actions/uiActions'
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/authActions'

export const RegisterScreen = () => {

    /*
    {
        name:'Daniel',
        email:'daniel@gmail.com',
        password:'123456',
        password2:'123456'
    }
    */

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);


    const [formValues, handleInputChange] = useForm({
        name: 'Daniel',
        email: 'daniel@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }

    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError("name is required"));
            return false
        } else if (!validator.isEmail(email)) {
            dispatch(setError("email is no valid"));
            return false
        } else if (password !== password2 || password < 5) {
            dispatch(setError("Password should be at least 6 characters and match each other"));
            return false
        }

        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            {
                msgError && (
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                )
            }
            <form
                onSubmit={handleRegister}
                className="animate__animated animate__fadeIn  animate__faster"
            >

                <input
                    autoComplete="off"
                    className="auth__input"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    autoComplete="off"
                    className="auth__input"
                    name="email"
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    placeholder="Confirm"
                    name="password2"
                    type="password"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Create Account
                </button>
                <Link
                    className="link "
                    to="/auth/login"
                >
                    Already have a account?
                </Link>
            </form>
        </>
    )
}
