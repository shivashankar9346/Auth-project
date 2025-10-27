import { useContext } from 'react';
import { AuthContext } from '../components/authContext';

// Custom hook for easy access
function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
