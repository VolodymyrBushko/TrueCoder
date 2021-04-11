import React from 'react';

import './profile-image.css';

const ProfileImage = ({image}) => {
  return (
    <div className="profile-image-wrap">
      <img src={image} alt="profile" className="image"/>
    </div>
  );
}

export default ProfileImage;
