import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { sendPasswordResetEmail, updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase-auth-config";


const Login = () => {

    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();

    const emailRef = useRef();

    const [emailChange, setEmailChange] = useState('')


    const handleLogin = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, name);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, { displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg" })
                    .then(() => { })
                    .catch(error => {
                        console.error(error.message);
                    });
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error.message);
            })
    };

    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error.message);
            });
    };

    const handleGithub = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error.message);
            });
    }

    const handleForgetPassword = () => {


        // const email = emailRef.current.value;
        // if (!email) {
        //     console.log('please provide a email');
        //     return;
        // }
        // else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        //     console.log('please input a valid email');
        //     return;
        // }

        sendPasswordResetEmail(auth, emailChange)
            .then(() => {
                alert('please check your email')
                navigate('/login')
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    const handleEmailChange = e => {
        setEmailChange(e.target.value);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={handleEmailChange} type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <button onClick={handleForgetPassword} >Forgot password?</button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New Here?? Please <Link to={'/register'}> <button className="btn btn-success">Register</button></Link></p>
                    </form>
                    <button onClick={handleGoogle} className="btn btn-secondary mb-4">Google</button>
                    <button onClick={handleGithub} className="btn btn-error">Github</button>
                </div>
            </div>
        </div>
    );
};
export default Login;