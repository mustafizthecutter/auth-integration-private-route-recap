import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, name);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
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
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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