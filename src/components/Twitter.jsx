import TweetList from './TweetList'
import AddTweet from './AddTweet';
import { useState } from 'react';

const initialDummyTweets=[
  {id:0, content: 'we have a new twitter called as threads', likeCount:3, createdAt: new Date()},
  {id:1, content: 'what should we post ??', likeCount:2,  createdAt: new Date()},
  {id:1, content: 'what is up with tech community ??', likeCount:2,  createdAt: new Date()}

];

 
function Twitter(){
    const [tweets, setTweets]=  useState(initialDummyTweets);
    const handleAddTweet=(text)=>{
        let nextId=(tweets.length>0)? tweets[tweets.length-1].id+1:0;
        setTweets([...tweets, {
            content:text,
            likeCount: Math.floor(Math.random()*10),  //this is a random like count,
            id: nextId,
            createdAt: new Date()
        }]);
    }

    const handleEditTweet=(tweet)=>{ //this incoming tweet is the updated tweet
      setTweets(
        tweets.map((currentTweet)=>{
          if(currentTweet.id===tweet.id){
            return tweet;
          }
          else{
            return currentTweet;
          }
        })
      )

    }
    return (
        <>
            <AddTweet onAddTweet={handleAddTweet} />
          <TweetList twests={tweets} onEditTweet={handleEditTweet}/>
        </>       
      );
}
export default Twitter;