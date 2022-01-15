import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';

const RouteComp = (props) => {
    return (
      <>
        <Switch>
          <Route path="/" component={Home} exact />
          {/* <Route path="/chocolateCalendar" component={Calendar} /> */}
          {/* <Route component={NotFound}/> */}
        </Switch>
      </>
    );
  };
  
  export default RouteComp;