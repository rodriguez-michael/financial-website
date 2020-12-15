import { createContext } from 'react';

const isLoggedIn = createContext({
  isLoggedIn: false, // default isLoggedIn value will be false
  setIsLoggedIn: () => {}, // for now, we'll simply create an empty setUser function
});

export default isLoggedIn;