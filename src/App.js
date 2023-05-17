import './App.css';
import Post from './components/Post';

function App() {
	return (
		<>

			<main>
				<div class="container mt-4">
					<div class="row">
						<div class="col-lg-3">
							<div class="card mb-3">
								<div class="card-body">
									<h5 class="card-title">Your Profile</h5>
									<p class="card-text">View and edit your profile</p>
									<a href="#" class="btn btn-primary">View Profile</a>
								</div>
							</div>
							<div class="card">
								<div class="card-body">
									<h5 class="card-title">People You May Know</h5>
									<ul class="list-group">
										<li class="list-group-item d-flex justify-content-between align-items-center">
										John Doe
										<button class="btn btn-sm btn-outline-primary">Connect</button>
										</li>
										<li class="list-group-item d-flex justify-content-between align-items-center">
										Jane Smith
										<button class="btn btn-sm btn-outline-primary">Connect</button>
										</li>
										<li class="list-group-item d-flex justify-content-between align-items-center">
										Bob Johnson
										<button class="btn btn-sm btn-outline-primary">Connect</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="card mb-3">
								<div class="card-body">
									<form>
										<div class="mb-3">
											<textarea class="form-control" id="postText" rows="3" placeholder="What's on your mind?"></textarea>
										</div>
										<div class="mb-3">
											<label for="postImage" class="form-label">Add an image (optional)</label>
											<input class="form-control" type="file" id="postImage"/>
										</div>
										<div class="d-flex justify-content-end">
											<button type="submit" class="btn btn-primary">Post</button>
										</div>
									</form>
								</div>
							</div>

							<Post/>
						</div>
					</div>
				</div>
			</main>

		</>
	);
}

export default App;
