import Tweet from './Tweet';
import '../CSS/TweetList.css'
function TweetList({twests, onEditTweet}){

    return (
        <ul className='tweet-list'>
            {
                twests.map((tweet)=>(
                    <li className='tweet-like-wrapper' key={tweet.id}>
                        <Tweet 
                        tweetId={tweet.id}
                        content={tweet.content}
                         likeCount={tweet.likeCount}
                          createdAt={tweet.createdAt.toString()}
                          onEdit={onEditTweet}
                        />
                    </li>
                ))
            }
        </ul>
    )
}
export default TweetList;