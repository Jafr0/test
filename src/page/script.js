const base = 'http://localhost:3000';

const reg = `${base}/auth/registration`;
const login = `${base}/auth/login`;
const users = `${base}/auth/users`;


const registration = document.querySelector('.reg')

const userLogin = document.querySelector('.username')
const userPass = document.querySelector('.password')


const createUser = async (data) => (
	await fetch(reg, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	})
).json();

registration.addEventListener('click', async (event) => {
	const target = event.target
	let a = userLogin.value
	let b = userPass.value
	const data = {
		username: a,
		password: b
	}
	if (target.classList.contains('reg')) {
		alert(JSON.stringify(data))
		createUser(data)
	}
})


