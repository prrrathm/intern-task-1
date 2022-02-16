import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import {Home} from './Components/Home';
import {About} from './Components/About';
import {Store} from './Components/Store';
import {Contact} from './Components/Contact';
function App() {
	return (
	<div className='body'>
	<Router>
		Hello
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/store">Store</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
		<div className="mainbody">
			<h1>
				Welcome to our page!
			</h1>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/store" element={<Store />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	</Router>
	</div>
	);
}

export default App;
