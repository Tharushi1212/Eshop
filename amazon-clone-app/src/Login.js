import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import './Images/logo.png'
import {useRef, useState} from 'react'
import {signup, logout, login, useAuth} from './firebase'


 function Login(){

    const history = useHistory();
    
    const [ loading, setLoading ] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const currentUser = useAuth();

    async function handleLogin() {
        setLoading(true);
       // try {
          let data = await login(emailRef.current.value, passwordRef.current.value);
          console.log("login return data",data);          
          history.push("/");
          window.location.reload();
       // } catch(error) {
      //     alert("Error!");
      //     console.log("Error",error);
      //   }
      //   setLoading(false);
       }

    async function handleSignup(){
        
        setLoading(true);
        try {
          await signup(emailRef.current.value, passwordRef.current.value);
         } catch {
           alert("Error!");
        }
        setLoading(false);
    }

    async function handleLogout() {
        setLoading(true);
        try {
          await logout();
        } catch {
          alert("Error!");
        }
        setLoading(false);
      }

    return(
        <div className='login'>
            <div>Currently logged in as: { currentUser?.email } </div>
            <Link >
                <img className='login__logo' alt='' src='./Images/logo.png'/>
            </Link>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input ref={emailRef} type='email'/>

                    <h5>Password</h5>
                    <input ref={passwordRef} type='password'/>

                    <button type='submit' disabled={ loading || currentUser } onClick={handleLogin} className='login__signInButton'>Sign In</button>
                </form>
                <p>By signing-in you agree to company Terms and Conditions</p>
                <button disabled={ loading || currentUser } onClick={handleSignup} className='login__registerButton'>Create your shopping account</button>
                <button disabled={ loading || !currentUser }  onClick={handleLogout} className='login__registerButton'>Log Out</button>
            </div>

        </div>
    )
}
export default Login