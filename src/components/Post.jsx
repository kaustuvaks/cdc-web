import {useState} from 'react';
import LikeButton  from './LikeButton';
function Post() {

    const [likes, setLikes] = useState(0);

    const handleLike = (newLikes) => {
        setLikes(newLikes);
    };

    return(
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Recent Posts</h5>
                <div class="card mb-3">
                    <div class="card-body">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus sapien nec lectus sollicitudin tincidunt.</p>
                        <img src="https://via.placeholder.com/300x200" alt="Post Image" class="img-fluid mb-3"/>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <LikeButton text={"like"} likes={likes} onLike={handleLike}/>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Comment</button>
                            </div>
                            <small class="text-muted">3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;