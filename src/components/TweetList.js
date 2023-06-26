import React from 'react';
import Tweet from './Tweet';
import { Card, Form } from 'react-bootstrap';

function TweetList() {
    const tweetList = [
        {
            user: 'Soup1e',
            userPic: 'profile',
            date: 'today',
            message: 'I love react!'
        },
        {
            user: 'Soup1e',
            userPic: 'profile',
            date: 'today',
            message: 'I think in react!'
        },
        {
            user: 'Noodly',
            userPic: 'profile3',
            date: 'yesterday',
            message: 'I love pasta!'
        },
        {
            user: 'VeryColdman',
            userPic: 'profile4',
            date: 'tomorrow',
            message: 'whatchoo talkin bout willis?'
        },
        {
            user: 'Noodly',
            date: 'yesterday',
            userPic: 'profile3',
            message: 'I love pizza!'
        },
        {
            user: 'VeryColdman',
            userPic: 'profile4',
            date: 'tomorrow',
            message: 'whatchoo talkin bout react? '
        },
    ]

    return (
        <React.Fragment>
            <Card>
            <Form>
                <Form.Group controlId="tweetBox">
                <Form.Control as="textarea" rows={3} placeholder="Compose new Tweet..." />
                </Form.Group>
            </Form>
                {tweetList.map((tweet, index) =>
                <Tweet user={tweet.user}
                userPic={tweet.userPic}
                date={tweet.date}
                message={tweet.message}
                key={index}/>
                )}
            </Card>
        </React.Fragment>
    )
}

export default TweetList