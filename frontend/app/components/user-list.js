import React from 'react';
import User from './user';
import { Card, CardBlock, CardTitle } from 'reactstrap';

const UserList = (props) => {

  const users = props.users.map((user) => {
    return (<User
      key={user.id}
      name={user.name}
      role={user.role} />);
  });

  return(
    <Card block>
      <CardTitle>Roles</CardTitle>
      {users}
    </Card>
  );
}

export default UserList;
