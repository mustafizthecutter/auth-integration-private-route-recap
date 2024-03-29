import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { sendEmailVerification } from "firebase/auth";

// import auth from "../../Firebase/firebase-auth-config";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, name);

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                const currentUser = result.user;
                sendEmailVerification(currentUser)
                    .then(() => {
                        alert('please verify your email!!!')
                    })
                e.target.reset()
            })
            .catch(error => console.error(error.message));

    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
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

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have Account?? Please <Link to={'/login'}> <button className="btn btn-success">Login</button></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;