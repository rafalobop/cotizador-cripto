import React from 'react';
import styled from '@emotion/styled/dist/emotion-styled.cjs';

const MensajeError = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
`;
const Erorr = ({ mensaje }) => {
  return (
    <>
      <MensajeError>{mensaje}</MensajeError>
    </>
  );
};

export default Erorr;
