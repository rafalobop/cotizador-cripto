import React from 'react';
import styled from '@emotion/styled/dist/emotion-styled.cjs';

const ContenedorCotizacion = styled.div`
  color: #fff;
  font-family: Helvetica, Arial, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 25px;
`;
const Cotizacion = ({ cotizacion }) => {
  if (Object.keys(cotizacion).length === 0) return null;
  console.log(cotizacion);
  return (
    <>
      <ContenedorCotizacion>
        <Precio>
          El precio es: <span>{cotizacion.PRICE}</span>
        </Precio>
        <Info>
          Precio mas alto del dia: <span>{cotizacion.HIGHDAY}</span>
        </Info>
        <Info>
          Precio mas bajo del dia: <span>{cotizacion.LOWDAY}</span>
        </Info>
        <Info>
          Variacion ultimas 24 hs: <span>{cotizacion.CHANGEPCT24HOUR}</span>
        </Info>
        <Info>
          Ultima Actualizacion: <span>{cotizacion.LASTUPDATE}</span>
        </Info>
      </ContenedorCotizacion>
    </>
  );
};

export default Cotizacion;
