import React from 'react';
import User from './user';
import { Card, CardBlock, CardTitle } from 'reactstrap';

const UserList = (props) => {

  const users = props.users.map((user) => {
    return (<User
      key={User.id}
      name={User.name}
      role={User.role} />);
  });

  return(
    <Card block>
      <CardTitle>Participants</CardTitle>
      {users}
    </Card>
  );
}

export default UserList;
