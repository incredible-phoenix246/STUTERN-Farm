import { useEffect } from 'react';
import Router, { useRouter } from 'next/navigation';
import isAuthenticated from './isAuthenticated';


const withAuth = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
  const Wrapper: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('Auth_token');
      const isLoggedIn = isAuthenticated(token as string);
      if (!isLoggedIn) {
        router.push('/');
      }

    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
