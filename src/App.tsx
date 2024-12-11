import {Route, Routes} from 'react-router';
import {Layout} from './Layout';
import {Homepage} from './Homepage/Homepage';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path={'/'} element={<Homepage />} />
			</Routes>
			<div>hello world!</div>
		</Layout>
	);
}

export default App;
