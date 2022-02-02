import useJsonFetch from "../../hooks/useJsonFetch";
import Post from "./Post";

export default function HomeNewPage({ history }) {
    const [posts] = useJsonFetch('https://lap-heroku-react-router.herokuapp.com/posts');
    const addPost = () => {
        history.push('/posts/new');
    }

    return (
        <div className='home-page'>
            <div className="btn-box">
                <div className="btn-box_one">
                    <button className='add-post' onClick={addPost}>Создать пост</button>
                </div>
            </div>
            <div className='posts'>
                {posts && posts.map((el) => <Post post={el} key={el.id} />)}
            </div>
        </div>
    );
}
