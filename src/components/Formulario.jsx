import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled/dist/emotion-styled.cjs';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';
import Error from './Erorr';

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.4s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({ setCripto, setTipoMoneda }) => {
  //state del listado dde cripto
  const [listaCripto, setListaCripto] = useState([]);
  const [error, setError] = useState(false);

  const tiposMonedas = [
    { codigo: 'USD', nombre: 'Dolar Estadounidense' },
    { codigo: 'ARS', nombre: 'Peso Argentino' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Libra Esterlina' },
  ];

  const [moneda, SelectMoneda] = useMoneda('Elige tu Moneda', '', tiposMonedas);

  const [criptoMoneda, SelectCripto] = useCriptomoneda(
    'Elige tu Criptomoneda',
    '',
    listaCripto
  );
  const handleSubmit = (e) => {
    e.preventDefault();

    if (moneda === '' || criptoMoneda === '') {
      setError(true);
      setTimeout(() => {
        setError();
      }, 2000);
      return;
    }

    setError(false);
    setTipoMoneda(moneda);
    setCripto(criptoMoneda);
  };

  //ejecutar llamado a api
  useEffect(() => {
    const consultarApi = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await axios.get(url);

      setListaCripto(resultado.data.Data);
    };
    consultarApi();
  }, []);

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        {error ? <Error mensaje="Debes completar ambas opciones" /> : null}
        <SelectMoneda />
        <SelectCripto />
        <Boton type="submit" value="Calcular" />
      </form>
    </>
  );
};

export default Formulario;
