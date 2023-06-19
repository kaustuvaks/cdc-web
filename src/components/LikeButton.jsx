import { useState } from 'react';

function LikeButton({ text ,likes, onLike }) {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
        onLike(liked ? likes - 1 : likes + 1);
    };

    return (
        <button onClick={handleClick} type="button" class="btn btn-sm btn-outline-secondary">
        {liked ? likes : 'Like'}
        </button>
    );
}

export default LikeButton;
