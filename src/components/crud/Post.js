import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import moment from 'moment';

export default function Post({ post }) {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/posts/${post.id}`);
    };

    return (
        <div className='post' onClick={handleClick}>
            <img className='post-img' src={post.avatar} alt={post.name} />
            <div className='post-name'><p>{post.name}</p></div>
            <div className='post-created'>{moment(post.created).fromNow()}</div>
            <div className='post-content'>{post.content}</div>
        </div>
    );
}
Post.propTypes = {
    post: PropTypes.shape({
        content: PropTypes.string,
    }).isRequired,
}
