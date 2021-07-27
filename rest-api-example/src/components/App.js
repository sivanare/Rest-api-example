import '../App.scss';
import FetchEmployees from './FetchEmployees';
import Nav from './Nav';

function App() {
	return (
		<div className='App'>
			<Nav />
			<FetchEmployees />
		</div>
	);
}

export default App;
