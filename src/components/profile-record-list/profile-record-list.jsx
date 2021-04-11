import React from 'react';

import ProfileRecordListItem from '../profile-record-list-item';

import './profile-record-list.css';

const ProfileRecordList = ({records}) => {
  return (
    <div className="profile-record-list container">
      <div className="row justify-content-center">
        {records.map(record => (
          <div className="col-xl-3 col-sm-6 col-12">
            <ProfileRecordListItem {...record}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileRecordList;
