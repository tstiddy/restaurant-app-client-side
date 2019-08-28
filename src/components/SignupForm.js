import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const SignupForm = ({ submit, header }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Form onSubmit={e => {
            e.preventDefault();
            submit({ email, password})
            setEmail('')
            setPassword('')
        }}>
            <span>{header}</span>
            <Form.Field>
                <label>Email</label>
                <input placeholder='email' type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>password</label>
                <input placeholder='password' type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Field>
        <Button type="submit">Sign Up</Button>
        </Form>
    )
}

export default SignupForm