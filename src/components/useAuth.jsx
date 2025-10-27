import { useContext } from 'react';
import { AuthContext } from '../components/authContext';

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
