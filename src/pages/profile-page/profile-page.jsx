import React from 'react';

import ProfileImage from '../../components/profile-image';
import ProfileData from '../../components/profile-data';
import ProfileRecordList from '../../components/profile-record-list';

import './profile-page.css';

import images from './images';

const ProfilePage = () => {
  const records = [
    {image: images[0], title: 'C++', complete: 60},
    {image: images[1], title: 'C#', complete: 30},
    {image: images[2], title: 'Java', complete: 10},
    {image: images[3], title: 'Python', complete: 10},
    {image: images[4], title: 'Ruby', complete: 20},
    {image: images[5], title: 'PHP', complete: 30},
  ];
  return (
    <div className="profile-page container">

      <div className="row justify-content-center">
        <div className="col-4">
          <ProfileImage image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIltE7CNXgJ95jKIkczNnzcVEbiox9t0c-sg&usqp=CAU"/>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-8">
          <ProfileData login="Volodymyr" email="volodymyrbush@gmail.com" id="MY4MVP_BesZJOog8OjP"/>
        </div>
      </div>

      <hr style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}/>

      <div className="row">
        <div className="col">
          <ProfileRecordList records={records}/>
        </div>
      </div>

    </div>
  );
}

export default ProfilePage;
