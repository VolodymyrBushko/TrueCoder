import React from 'react';

import ProfileImage from '../../components/profile-image';
import ProfileData from '../../components/profile-data';
import ProfileRecordList from '../../components/profile-record-list';

import './profile-page.css';

const ProfilePage = () => {
  const records = [
    {image: 'https://github.com/abranhe/programming-languages-logos/blob/master/src/cpp/cpp_64x64.png?raw=true', title: 'C++', complete: '60%'},
    {image: 'https://github.com/abranhe/programming-languages-logos/blob/master/src/cpp/cpp_64x64.png?raw=true', title: 'C#', complete: '30%'},
    {image: 'https://github.com/abranhe/programming-languages-logos/blob/master/src/cpp/cpp_64x64.png?raw=true', title: 'Java', complete: '90%'},
    {image: 'https://github.com/abranhe/programming-languages-logos/blob/master/src/cpp/cpp_64x64.png?raw=true', title: 'Java', complete: '90%'},
    {image: 'https://github.com/abranhe/programming-languages-logos/blob/master/src/cpp/cpp_64x64.png?raw=true', title: 'Java', complete: '90%'},
    {image: 'https://github.com/abranhe/programming-languages-logos/blob/master/src/cpp/cpp_64x64.png?raw=true', title: 'Java', complete: '90%'},
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
          <ProfileData login="Volodymyr" email="volodymyr.bushko@gmail.com" id="sadasdasgfd1234fdf5"/>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <ProfileRecordList records={records}/>
        </div>
      </div>

    </div>
  );
}

export default ProfilePage;
