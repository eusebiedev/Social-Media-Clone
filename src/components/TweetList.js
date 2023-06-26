import React from 'react';
import Tweet from './Tweet';
import { Card, Form } from 'react-bootstrap';


function TweetList() {
    const tweetList = [
        {
            user: 'Soup1e',
            date: 'today',
            message: 'I love react!'
        },
        {
            user: 'Soup1e',
            date: 'today',
            message: 'I think in react!'
        },
        {
            user: 'Noodly',
            date: 'yesterday',
            message: 'I love pasta!'
        },
        {
            user: 'VeryColdman',
            date: 'tomorrow',
            message: 'whatchoo talkin bout willis?'
        },
        {
            user: 'Noodly',
            date: 'yesterday',
            message: 'I love pizza!'
        },
        {
            user: 'VeryColdman',
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
                date={tweet.date}
                message={tweet.message}
                key={index}/>
                )}
            </Card>
        </React.Fragment>
    )
}

export default TweetList