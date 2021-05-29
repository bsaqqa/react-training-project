import React from 'react';  
import { Route } from 'react-router-dom';  
import Sidebar from '../Components/Dashboard/SideBar';


const DashboardLayout = ({ children , ...rest}) => (
    <>  
        <Sidebar {...rest} component={children}/>
    </>
  );  

  const DashboardLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={props => (  
        <DashboardLayout {...rest}>
            <Component {...props} />  
        </DashboardLayout>  
      )} />  
    )  
  };  

export default DashboardLayoutRoute;  