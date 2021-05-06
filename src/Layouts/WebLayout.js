import React from 'react';  
import { Route } from 'react-router-dom';  
import Navbar from '../Components/Navbar'

const WebLayout = ({ children }) => (                         
    <>  
        <Navbar/>
        {children}                                       
    </>  
  );  

  const WebLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={props => (  
        <WebLayout> 
            <Component {...props} />  
        </WebLayout>  
      )} />  
    )  
  };  

export default WebLayoutRoute;  