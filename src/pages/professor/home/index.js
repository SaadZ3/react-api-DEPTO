import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Loading from '../../../components/loading';
import { Container } from '../../../styles/globalStyles';

export default function homeProf() {
   const isLoading = useSelector((state) => state.auth.isLoading);

   return (
      <Container>
         <Loading isLoading={isLoading} />

         <h1>Home - Professor </h1>
      </Container>
   );
}
