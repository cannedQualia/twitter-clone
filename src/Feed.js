import React, {useEffect, useState} from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import "./Feed.css"
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            {posts.map(post => (
                <Post 
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    image={post.image}
                    avatar={post.avatar}
                    />
            ))}
            
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
        </div>
    )
}

export default Feed
