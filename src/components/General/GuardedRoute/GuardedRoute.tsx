import { useEffect } from "react";
import { Navigate, useLocation } from "react-router";

export type GuardedRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
    outlet: JSX.Element;
    redirectPath: string;
    setRedirectPath: (path: string) => void;
};

export default function GuardedRoute(props: GuardedRouteProps) {
  const currentLocation = useLocation();
  
  useEffect(() => {
    if (!props.isAuthenticated) {
      console.log('use effect: ', props.isAuthenticated);
      props.setRedirectPath(currentLocation.pathname);
    }
  }, [props.isAuthenticated, props.setRedirectPath, currentLocation]);
  
  if(props.isAuthenticated) {
      return props.outlet;
    } else {
      return <Navigate to={{ pathname: props.authenticationPath }} />;
    }
};