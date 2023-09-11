import Countdown from "./beforerelease";
import { Outlet } from 'react-router-dom';

function Layout( {children} ) {
  return (
    <>
      <Countdown />
      {children}
    </>
  );
}

export default Layout;
