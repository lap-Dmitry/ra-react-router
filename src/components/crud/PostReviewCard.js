import { useState } from 'react';
import useJsonFetch from '../../hooks/useJsonFetch';
import Form from './Form';
import Post from './Post';

export default function PostReviewCard({ match, history }) {
    const [isEdit, setEdit] = useState(false);
    const [posts] = useJsonFetch('https://lap-heroku-react-router.herokuapp.com/posts', isEdit);

    const handleEdit = () => {
        setEdit(true);
    }

    const handleSubmit = (text) => {
        const data = JSON.stringify({ id: Number(match.params.id), content: text });
        fetch('https://lap-heroku-react-router.herokuapp.com/posts', {
            method: 'POST',
            body: data,
        })
            .then(() => {
                setEdit(false);
            })
    }

    const handleDelete = () => {
        fetch(`https://lap-heroku-react-router.herokuapp.com/posts/${match.params.id}`, {
            method: 'DELETE',
        })
            .then(() => {
                history.push('/');
            })
    }

    const handleClose = () => {
        setEdit(false);
    }

    return (
        <div className='post-card'>
            {posts && ((!isEdit &&
                <div className='home-page'>
                    <button className='btn_cancel' onClick={() => history.push('/')}>X</button>
                    <Post post={posts.find((el) => el.id === Number(match.params.id))} />
                    <div className='btn_container'>
                        <button className='edit-btn' onClick={handleEdit}>Изменить</button>
                        <button className='delete-btn' onClick={handleDelete}>Удалить</button>
                    </div>
                </div>
            ) ||
                (isEdit &&
                    <div className='form-wrapper'>
                        <Form post={posts.find((el) => el.id === Number(match.params.id))} onSubmit={handleSubmit} onClose={handleClose} />
                    </div>
                ))
            }
        </div>
    );
}
