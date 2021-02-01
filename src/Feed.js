import React from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import "./Feed.css"

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            <Post 
                displayName="The Canned Qualia"
                username="cannedQualia"
                verified={true}
                text="Text test txt working!"
                avatar="http://maggband.net/images/cov.png"
                image="https://i.pinimg.com/736x/36/1a/ac/361aac252a205a3cc53dafd1df13004e.jpg"
                />
            
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
        </div>
    )
}

export default Feed
