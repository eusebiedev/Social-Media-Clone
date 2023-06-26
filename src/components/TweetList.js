import React from 'react';
import Tweet from './Tweet';
import { Form } from 'react-bootstrap';

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
            message: 'I love pasta! Only pasta. There was always pasta.'
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
            message: 'I already said i love pasta. There is nothing else. only variations on pasta!'
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
                <Form>
                    <Form.Group controlId="tweetBox">
                        <Form.Control className="compose" as="textarea" rows={2} placeholder="Compose new Tweet..." />
                    </Form.Group>
                </Form>
                    {tweetList.map((tweet, index) =>
                    <Tweet user={tweet.user}
                    userPic={tweet.userPic}
                    date={tweet.date}
                    message={tweet.message}
                    key={index}/>
                    )}
        </React.Fragment>
    )
}

export default TweetList