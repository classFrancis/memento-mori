// import React, { useEffect } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import { Flex } from 'antd';
// import MainComponent from './Main';

// const Login = () => {
//   const { loginWithRedirect, logout, isAuthenticated, isLoading, error } = useAuth0();

//   useEffect(() => {
//     if (!isAuthenticated && !isLoading) {
//       loginWithRedirect();
//     }
//   }, [isAuthenticated, isLoading, loginWithRedirect]);

//   useEffect(() => {
//     if (error && !isAuthenticated) {
//       logout({ logoutParams: { returnTo: window.location.origin } });
//     }
//   }, [error, isAuthenticated, logout]);

//   const getErrorMessage = (error) => {
//     if (!error) return null;

//     switch (error.error) {
//       case "access_denied":
//         return "Acceso denegado.";
//       default:
//         return "Error desconocido.";
//     }
//   };

//   if (isLoading) {
//     return (
//       <Flex justify='center' align='center'>
//         <h1>Loading...</h1>
//       </Flex>
//     );
//   }

//   if (!isAuthenticated && error) {
//     return (
//       <>
//         <Flex justify='center' align='center'>
//           <h1>{getErrorMessage(error)}</h1>
//         </Flex>
//       </>
//     );
//   }

//   if (isAuthenticated) {
//     return (
//         <MainComponent />
//     );
//   }

//   return null;
// };

// export default Login;
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Flex } from 'antd';
import MainComponent from './Main';

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, error } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      console.log("User not authenticated, redirecting to login...");
      loginWithRedirect();
    } else {
      console.log("User is authenticated or loading...");
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  useEffect(() => {
    if (error && !isAuthenticated) {
      console.log("Error occurred, logging out...", error);
      logout({ logoutParams: { returnTo: window.location.origin } });
    }
  }, [error, isAuthenticated, logout]);

  const getErrorMessage = (error) => {
    if (!error) return null;

    switch (error.error) {
      case "access_denied":
        return "Acceso denegado.";
      default:
        return "Error desconocido.";
    }
  };

  if (isLoading) {
    return (
      <Flex justify='center' align='center' style={{ height: '100vh' }}>
        <h1>Loading...</h1>
      </Flex>
    );
  }

  if (!isAuthenticated && error) {
    return (
      <Flex justify='center' align='center' style={{ height: '100vh' }}>
        <h1>{getErrorMessage(error)}</h1>
      </Flex>
    );
  }

  if (isAuthenticated) {
    return <MainComponent />;
  }

  return null;
};

export default Login;
