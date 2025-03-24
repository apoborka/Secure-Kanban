import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  exp?: number; // Expiration time (optional)
  [key: string]: any; // Other properties
}

class AuthService {
  // Decode the token and return the user profile
  getProfile() {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  // Check if the user is logged in by verifying the presence and validity of the token
  loggedIn() {
    const token = this.getToken();
    return token ? !this.isTokenExpired(token) : false;
  }

  // Check if the token is expired
  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (decoded.exp) {
        const currentTime = Date.now() / 1000; // Convert to seconds
        return decoded.exp < currentTime;
      }
      return false;
    } catch (error) {
      console.error('Error decoding token:', error);
      return true;
    }
  }

  // Retrieve the token from localStorage
  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  // Save the token to localStorage and redirect to the home page
  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Remove the token from localStorage and redirect to the login page
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();