import React from 'react';
import Recommended from './Recommended';

function RecommendedList() {
  const recommendedUserList = [
    {
        user: 'Soup1e',
        userPic: 'profile'
    },
    {
        user: 'Noodly',
        userPic: 'profile3'
    },
    {
        user: 'VeryColdman',
        userPic: 'profile4'
    },
]
  return (
    <React.Fragment>
        {recommendedUserList.map((recommended, index) =>
          <Recommended user={recommended.user}
          userPic={recommended.userPic}
          key={index}/>
        )}
    </React.Fragment>
  )
}

export default RecommendedList