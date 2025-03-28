import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error('Invalid username or password');
    }

    const data = await response.json();
    return data; // This should include the JWT token
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export { login };