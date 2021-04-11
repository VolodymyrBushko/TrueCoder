import React from 'react';

import './profile-record-list-item.css';

const ProfileRecordListItem = ({image, title, complete}) => {
  return (
    <div className="profile-record-list-item card">
      <div className="card-content">
        <div className="card-body">
          <div className="media d-flex">
            <div className="media-body text-left">
              <h3 className="success">{complete}</h3>
              <span>{title}</span>
            </div>
            <div className="align-self-center">
              <img src={image} alt="language"/>
            </div>
          </div>
          <div className="progress mt-1 mb-0" style={{height: '7px;'}}>
            <div className="progress-bar bg-success" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileRecordListItem;
