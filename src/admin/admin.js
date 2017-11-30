import React from 'react' ;
import AddUser from './addUser';
import UpdateUser from './updateUser';
import Alert from './alert';
import UpdateUserItem from './updateUserItem';
import './admin.css';

class Admin extends React.Component {

  render() {
    return (
      <div className='admin'>
        <AddUser/>
        <UpdateUser/>
        <Alert/>
        <UpdateUserItem/>
      </div>
    )
  }
}

export default Admin;
