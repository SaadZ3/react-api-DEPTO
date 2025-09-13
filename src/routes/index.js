import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './myRoute';

import Aluno from '../pages/aluno';
import Alunos from '../pages/alunos';
import Fotos from '../pages/fotos';
import Register from '../pages/register';
import Login from '../pages/login';
import Page404 from '../pages/page404';
import Home from '../pages/home';

export default function Routes() {
   return (
      <Switch>
         <MyRoute exact path="/" component={Alunos} isClosed={false} />
         <MyRoute exact path="/home" component={Home} isClosed={false} />

         {/* as proximas 3 rotas são de ediçãa de aluno */}
         <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
         <MyRoute exact path="/aluno/" component={Aluno} isClosed />
         <MyRoute exact path="/fotos/:id" component={Fotos} isClosed />

         {/* eslint-disable-next-line prettier/prettier */}
         <MyRoute exact path="/register/" component={Register} isClosed={false} />
         <MyRoute exact path="/login/" component={Login} isClosed={false} />

         <MyRoute path="*" component={Page404} />
      </Switch>
   );
}
