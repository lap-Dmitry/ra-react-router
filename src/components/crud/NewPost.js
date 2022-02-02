import Form from "./Form";

export default function NewPost({ history }) {
    const handleClose = () => {
        history.push('/');
    }

    const handleSubmit = (text) => {
        const data = JSON.stringify({ id: 0, content: text, name: 'Пётр Сергеев', avatar: 'https://i.pravatar.cc/40', });
        fetch('https://lap-heroku-react-router.herokuapp.com/posts', {
            method: 'POST',
            body: data,
        })
            .then(() => {
                history.push('/');
            })
    }

    return (
        <div className='new-post'>
            <Form onSubmit={handleSubmit} onClose={handleClose} />
        </div>
    );
}
