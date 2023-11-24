import { useRouter } from 'next/navigation';

function logout ()  {
  // Clear local storage
  localStorage.removeItem('Auth_token');

  // Redirect to home page
  const router = useRouter();
  router.push('/');
};

export default logout;
