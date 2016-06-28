import React from 'react';
import UserList from './user-list';

const Sidebar = (props) => {

  return(
    <div className="sidebar">
      <UserList users={props.users} />
    </div>
  );
}

export default Sidebar;
