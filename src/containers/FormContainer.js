import React from 'react';
import { Button, Modal, Icon, Menu, Segment } from 'semantic-ui-react'
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import {Link} from 'react-router-dom';

const FormContainer = ({ user, signUp, logIn, logOut }) => {
    return (
        <div>
            {
                user ? <Segment inverted>
                    <Menu.Item as={Link} to={'/'}>
                        <Icon link circular inverted color='red' name='utensils' size='big'/>
                    </Menu.Item>
                    <Button as={Link} to={`/favorites/${user.id}`}>Favorites</Button>
                    <Button as={Link} to={"/booking"}>Bookings</Button>
                    <Button onClick = {logOut}>Log Out</Button>
                </Segment> :
                 <Segment inverted>
                    <Menu.Item as={Link} to={'/'}>
                        <Icon link circular inverted color='red' name='utensils' size='big'/>
                    </Menu.Item>
                    <Modal trigger={<Button>Log In</Button>}>
                        <Modal.Content>
                            <LoginForm submit={logIn} header={'Log in'}/>
                            {/* Tempery for testing Auth */}
                            <SignupForm submit={signUp} header={'Sign Up'}/>
                        </Modal.Content>
                    </Modal>
                </Segment>
            }
        </div>
    )
}

export default FormContainer