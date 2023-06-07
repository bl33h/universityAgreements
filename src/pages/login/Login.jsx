import './Login.css'
import '/src/components/texts.css'
import '/src/components/display.css'
import { useState, useEffect } from 'react'
import { supabase } from '../../client'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setshowPassword] = useState(false);
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({ username: '', password: '', logged_in: false })
  let { username, password} = ''
  let succesfull_login = false
  const history = useNavigate()

  useEffect(() => {
    console.log('writing', user)
    window.localStorage.setItem('LOGIN_STATUS', JSON.stringify(user))
  }, [user])

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter'){
      check_login()
    }
  }

  const evaluate_login = () => {
    if (succesfull_login) {    
      setTimeout(() => {
        history.push('/MainPage') 
      }, 1500)
    } 
  }

  async function fetchPosts() {
    const { data } = await supabase.from('users').select()
    setUsers(data)
  }

  const check_login = () => {
    succesfull_login = false
    username = document.getElementById('input-username').value
    password = document.getElementById('input-password').value 
    if(!((username==='')&&(password===''))){
      let while_counter = 0
      while ((while_counter < users.length) && (succesfull_login == false)) {
        if ((username == users[while_counter].username) && (password == users[while_counter].password)) {
          succesfull_login = true
          setUser({ username: username, password: password, logged_in: true })
        } else {
          while_counter++
        }
      }
    }
    evaluate_login()
  }


  function handleCheckboxChange() {
    setshowPassword(!showPassword);
  }
  return (
    <div className="root" >
      <div className="container">
        <h1>Username:</h1>
        <input id="input-username"  className="input-login" onClick={fetchPosts} onKeyDown={handleKeyDown}></input>
          
        <h1>Password:</h1>
        <input type={showPassword ? 'text' : 'password'}  id="input-password" className="input-login" onClick={fetchPosts} onKeyDown={handleKeyDown}></input>

        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          <p>Mostrar contraseña</p>
          <input type="checkbox" id="mostrar-contrasena" onChange={handleCheckboxChange} />
        </div>
        
        <button className="login-button" onClick={check_login}>INICIAR SESION</button>
        </div>
      </div>
  )
}

export default Login
