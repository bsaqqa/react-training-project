import React from 'react';  
import { Route } from 'react-router-dom';  
// import Navbar from '../Components/Navbar'

const EmptyLayout = ({ children }) => (                         
    <>  
        {children}                                       
    </>  
  );  

  const EmptyLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={props => (  
        <EmptyLayout> 
            <Component {...props} />  
        </EmptyLayout>  
      )} />  
    )  
  };  

export default EmptyLayoutRoute;  