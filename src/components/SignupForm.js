import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const SignupForm = ({ submit, header }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [username, setUserName] = useState('')

    return (
        <Form onSubmit={e => {
            e.preventDefault();
            submit({ email, password, firstname, lastname, username})
            setEmail('')
            setPassword('')
            setFirstName('')
            setLastName('')
            setUserName('')
        }}>
            <span>{header}</span>
            <Form.Field>
                <label>Email</label>
                <input placeholder='email' type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='password' type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Username</label>
                <input placeholder='username' name='username' value={username} onChange={e => setUserName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Firstname</label>
                <input placeholder='firstname' name='firstname' value={firstname} onChange={e => setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Lastname</label>
                <input placeholder='lastname' name='lastname' value={lastname} onChange={e => setLastName(e.target.value)}/>
            </Form.Field>
        <Button type="submit">Sign Up</Button>
        </Form>
    )
}

export default SignupForm