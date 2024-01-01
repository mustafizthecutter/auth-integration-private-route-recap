import { createContext } from "react";
import PropTypes from 'prop-types';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const authInfo = { name: 'mustafiz', age: 34 }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;