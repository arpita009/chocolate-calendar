import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Calendar from '../pages/calendar/Calendar';

const RouteComp = (props) => {
    return (
      <>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/chocolateCalendar' component={Calendar} />
        </Switch>
      </>
    );
  };
  
  export default RouteComp;