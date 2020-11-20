import {
    Route, 
    Switch 
  } from 'react-router-dom';

import { Home, About } from 'pages'

export const Routes = () => {

    return (
    <Switch> 
        <Route exact path='/' component={Home}></Route> 
        <Route exact path='/about' component={About}></Route> 
    </Switch> 
    )

}