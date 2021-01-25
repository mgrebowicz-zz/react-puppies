// import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage() {
    return(
        <main>
            <h1>AuthPage</h1>
            <SignUpForm />
            <LoginForm />
        </main>
    );
}