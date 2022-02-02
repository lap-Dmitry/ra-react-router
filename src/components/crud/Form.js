import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Form({ post, onSubmit, onClose }) {
    const [form, setForm] = useState({ text: post.content });

    const handleChange = (event) => {
        setForm(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(form.text);
    }

    return (
        <form className='post-form' onSubmit={handleSubmit}>
            <button className='close-btn' onClick={onClose}>X</button>
            <textarea className='form-input' onChange={handleChange} name='text' value={form.text}></textarea>
            <div className="btn-box_one btn-box_two">
                <button className='add-post add-new__post'>Опубликовать</button>
            </div>
        </form>
    )
}

Form.propTypes = {
    post: PropTypes.shape({
        content: PropTypes.string,
    }),
}

Form.defaultProps = {
    post: { content: '' }
}
