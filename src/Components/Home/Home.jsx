import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo);
    return (
        <div className="text-3xl">
            this is home: {authInfo.name}
        </div>
    );
};

export default Home;