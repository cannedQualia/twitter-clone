import React, {useState} from 'react';
import "./TweetBox.css";
import {Avatar, Button} from "@material-ui/core";
import db from './firebase';


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName:  'Hello',
            username: 'hello',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: ''
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src=""></Avatar>
                    <input type="text" 
                        value={tweetMessage}
                        onChange={e => setTweetMessage(e.target.value)}
                        placeholder="What's happening" />
                    <input 
                        value={tweetImage}
                        onChange={e => setTweetImage(e.target.value)}
                        className="tweetBox__imageInput"
                        placeholder="Optional: Enter image URL"
                        type="text" />
                </div>
                <Button 
                    onClick={sendTweet}
                    className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
