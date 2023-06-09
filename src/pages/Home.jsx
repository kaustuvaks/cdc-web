import { useContext } from 'react';
import Post from '../components/Post';
import { UserAuthContext } from '../App';
import { Link } from 'react-router-dom';

function Home(){

    const {user} = useContext(UserAuthContext);
    return(

            <main>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">View and edit your profile</p>
                                <div className="btn btn-primary"><Link to="/profile" className="dropdown-item">View Profile</Link></div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">People You May Know</h5>
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                    John Doe
                                    <button className="btn btn-sm btn-outline-primary">Connect</button>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Jane Smith
                                    <button className="btn btn-sm btn-outline-primary">Connect</button>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Bob Johnson
                                    <button className="btn btn-sm btn-outline-primary">Connect</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card mb-3">
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <textarea className="form-control" id="postText" rows="3" placeholder="What's on your mind?"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label for="postImage" className="form-label">Add an image (optional)</label>
                                        <input className="form-control" type="file" id="postImage"/>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary">Post</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <Post/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;