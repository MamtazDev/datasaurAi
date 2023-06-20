import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const [reviews, setReviews] = useState(null);

  const authInfo = {
    user,
    setUser,
    reviews,
    setReviews,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
