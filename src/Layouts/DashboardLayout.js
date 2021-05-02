import React from 'react';  
import { Route } from 'react-router-dom';  
import Sidebar from '../Components/Dashboard/SideBar';

const DashboardLayout = ({ children }) => (                         
    <>  
        <Sidebar/>
        {children}                                       
    </>  
  );  

  const DashboardLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={props => (  
        <DashboardLayout> 
            <Component {...props} />  
        </DashboardLayout>  
      )} />  
    )  
  };  

export default DashboardLayoutRoute;  