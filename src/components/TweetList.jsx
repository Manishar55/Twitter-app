import Tweet from './Tweet';
import '../CSS/TweetList.css'
function TweetList({twests}){

    return (
        <ul className='tweet-list'>
            {
                twests.map((tweet)=>(
                    <li className='tweet-like-wrapper' key={tweet.id}>
                        <Tweet content={tweet.content} likeCount={tweet.likeCount} createdAt={tweet.createdAt.toString()}/>
                    </li>
                ))
            }
        </ul>
    )
}
export default TweetList;