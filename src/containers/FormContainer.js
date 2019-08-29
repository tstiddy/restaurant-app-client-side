import React from 'react';
import { Button, Modal } from 'semantic-ui-react'
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const FormContainer = ({ user, signUp, logIn, logOut }) => {
    return (
        <div>
            {
                user ? <div>
                    <Button onClick = {logOut}>Log Out</Button>
                </div> :
                 <div>
                    <Modal trigger={<Button>Log In</Button>}>
                        <Modal.Content>
                            <LoginForm submit={logIn} header={'Log in'}/>
                            {/* Tempery for testing Auth */}
                            <SignupForm submit={signUp} header={'Sign Up'}/>
                        </Modal.Content>
                    </Modal>
                </div>
            }
        </div>
    )
}

export default FormContainer