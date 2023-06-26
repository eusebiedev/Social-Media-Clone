import React from 'react';
import Recommended from './Recommended';
import { Card } from 'react-bootstrap';


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
      <Card className="d-flex justify-content-right align-items-center" id="follow"><h1>Who to follow</h1>
        {recommendedUserList.map((recommended, index) =>
          <Recommended user={recommended.user}
          userPic={recommended.userPic}
          key={index}/>
        )}
      </Card>
        
    </React.Fragment>
  )
}

export default RecommendedList