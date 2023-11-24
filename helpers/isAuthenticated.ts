import { jwtDecode } from 'jwt-decode';
import { isEmpty } from '.';

const clearLocalStorage = () => {
  localStorage.removeItem('Auth_token');
  localStorage.removeItem('Auth_token');
};

function isAuthenticated(token: string) {
  if (!token || isEmpty(token)) {
    return false;
  }
  try {
    const decodedToken = jwtDecode(token);
    const expirationTime = (decodedToken as any).exp * 1000;

    if (Date.now() >= expirationTime) {
      clearLocalStorage();
      return false;
    }

    return true;
  } catch (error) {
    console.error(`Error verifying jwt token: ${error}`);
    clearLocalStorage();
    return false;
  }
}

export default isAuthenticated;