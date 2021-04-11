import React from 'react';

import './profile-data.css';

const ProfileData = ({login, email, id}) => {
  return (
    <div className="profile-data">

      <div className="login">
        <h3>{login}</h3>
      </div>

      <div className="email">
        <h4>{email}</h4>
      </div>

      <div className="id">
        <h5>{id}</h5>
      </div>

    </div>
  );
}

export default ProfileData;
