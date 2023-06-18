import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Router>
			<App/>
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <header class="p-3 mb-3 border-bottom">
	<div class="container">
	<div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
		<a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
		<svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
		</a>

		<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
		<li><a href="#" class="nav-link px-2 link-secondary">Overview</a></li>
		<li><a href="#" class="nav-link px-2 link-dark">Inventory</a></li>
		<li><a href="#" class="nav-link px-2 link-dark">Customers</a></li>
		<li><a href="#" class="nav-link px-2 link-dark">Products</a></li>
		</ul>

		
	</div>
	</div>
</header> */}
