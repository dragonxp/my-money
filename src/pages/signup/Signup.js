import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

//styles
import styles from './Signup.module.css'

export default function Signup() {
	const [displayName, setDisplayName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { error, isPending, signup } = useSignup()

	const handleSubmit = (e) => {
		e.preventDefault()
		signup(displayName, email, password)
	}

	return (
		<form className={styles['signup-form']} onSubmit={handleSubmit}>
			<h2>Signup</h2>
			<label>
				<span>Display Name</span>
				<input
					type="text"
					onChange={e => setDisplayName(e.target.value)}
					value={displayName}
					required
				/>
			</label>
			<label>
				<span>Email</span>
				<input
					type="email"
					onChange={e => setEmail(e.target.value)}
					value={email}
					required
				/>
			</label>
			<label>
				<span>Password</span>
				<input
					type="password"
					onChange={e => setPassword(e.target.value)}
					value={password}
					required
				/>
			</label>
			{!isPending && <button className='btn'>Signup</button>}
			{isPending && <button className='btn' disabled>Loading..</button>}
			{error && <p>{error}</p>}
		</form>
	)
}