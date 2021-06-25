import React, { useState, useEffect } from 'react';
import './css/app.css';
import styled from '@emotion/styled/dist/emotion-styled.cjs';
import imagen from './criptomonedas.png';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';
import Loader from './components/Loader';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: '';
    width: 150px;
    height: 20px;
    background-color: #66a2fe;
    display: block;
  }
`;

const App = () => {
  const [tipoMoneda, setTipoMoneda] = useState('');
  const [cripto, setCripto] = useState('');
  const [cotizacion, setCotizacion] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cotizarMonedas = async () => {
      if (tipoMoneda === '') return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${tipoMoneda}`;
      const resultado = await axios.get(url);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setCotizacion(resultado.data.DISPLAY[cripto][tipoMoneda]);
      }, 2000);

      // console.log('cotizando...');
    };

    cotizarMonedas();
  }, [tipoMoneda, cripto]);

  const componente = loading ? (
    <Loader />
  ) : (
    <Cotizacion cotizacion={cotizacion} />
  );

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="criptomonedas-img" />
      </div>
      <div>
        <Heading>Cotizador de Criptomonedas al Instante</Heading>
        <Formulario setCripto={setCripto} setTipoMoneda={setTipoMoneda} />
        {componente}
      </div>
    </Contenedor>
  );
};

export default App;
