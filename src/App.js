import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

//pages & components
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Navbar from './components/Navbar'

function App() {
	const { user, isAuthReady } = useAuthContext()

	return (
		<div className="App">
			{isAuthReady && (
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={ user ? <Home /> : <Navigate to='login' /> } />
						<Route path="login" element={ !user ? <Login /> : <Navigate to='/' /> } />
						<Route path="signup" element={ !user ? <Signup /> : <Navigate to='/' /> } />
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
