import React, { useState } from 'react';
import styled from '@emotion/styled/dist/emotion-styled.cjs';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  --webkit-appearance: none;
  border-radius: 10px;
  font-size: 1.2rem;
  border: none;
`;

const useMoneda = (label, stateInicial, opciones) => {
  //state de nuestro hook
  const [state, setState] = useState(stateInicial);

  const Seleccionar = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">- Seleccione su Moneda -</option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  //retornar state, interfaz, funcion que modifica state
  return [state, Seleccionar, setState];
};

export default useMoneda;
