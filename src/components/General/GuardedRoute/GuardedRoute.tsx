import { Navigate } from "react-router";

export type GuardedRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
    outlet: JSX.Element;
};

export default function GuardedRoute({isAuthenticated, authenticationPath, outlet}: GuardedRouteProps) {
    if(isAuthenticated) {
      return outlet;
    } else {
      return <Navigate to={{ pathname: authenticationPath }} />;
    }
};