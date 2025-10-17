import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './myRoute';

import Departamento from '../pages/departamento';
import Departamentos from '../pages/deptosAndar';
import Register from '../pages/register';
import Login from '../pages/login';
import Page404 from '../pages/page404';
// import Home from '../pages/consultar';

import Consultar from '../pages/consultar';
import Gerenciar from '../pages/gerenciar';

export default function Routes() {
   return (
      <Switch>
         {/* eslint-disable-next-line prettier/prettier */}
         <MyRoute exact path="/departamentos/:andar" component={Departamentos} isClosed={false} />
         <MyRoute exact path="/" component={Consultar} isClosed={false} />

         {/* eslint-disable-next-line prettier/prettier */}
         <MyRoute exact path="/departamento/" component={Departamento} isClosed />
         {/* eslint-disable-next-line prettier/prettier */}
         <MyRoute exact path="/departamento/:id/edit" component={Departamento} isClosed />

         {/* eslint-disable-next-line prettier/prettier */}
         <MyRoute exact path="/register/" component={Register} isClosed={false} />
         <MyRoute exact path="/login/" component={Login} isClosed={false} />

         {/* eslint-disable-next-line prettier/prettier */}
         <MyRoute exact path="/consultar" component={Consultar} isClosed={false} />
         {/* eslint-disable-next-line prettier/prettier */}
         <MyRoute exact path="/gerenciar" component={Gerenciar} isClosed />

         <MyRoute path="*" component={Page404} />
      </Switch>
   );
}
