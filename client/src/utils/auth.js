// import { useNavigate } from 'react-router-dom';
// use this to decode a token and get the user's information out of it
import decode from "jwt-decode";

// create a new class to instantiate for a user
class AuthService {
  // get user data from JSON web token by decoding it
  getProfile() {
    return decode(this.getToken());
  }

  // return `true` or `false` if token exists (does not verify if it's expired yet)
  loggedIn() {
    const token = this.getToken();
    return token ? true : false;
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  login(data) {
    console.log(data);
    // Saves user token to localStorage and reloads the application for logged in status to take effect
    localStorage.setItem("id_token", data.login.token);
    localStorage.setItem("trainer_id", data.login.user._id);
    // localStorage.setItem("me_", data.login.user);
    window.location.assign("/");
  }

  logout() {
    // const navigate = useNavigate();
    // // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    localStorage.removeItem("trainer_id");
    // this will reload the page and reset the state of the application
    window.location.reload();
    // navigate('/login');
  }
}

export default new AuthService();
