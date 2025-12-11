import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';

const ProtectedRoute = ({ adminOnly = false, children }) => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;

  // If not logged in, show login modal
  if (!user) return <LoginModal onClose={() => navigate('/')} />;

  // If route requires Admin but user is not admin
  if (adminOnly && !isAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

  // All good → show protected content
  return children || <Outlet />;
};

export default ProtectedRoute;
