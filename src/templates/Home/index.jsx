import { useEffect, useRef, useState } from 'react';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { mapData } from '../../api/map-data';

export const Home = () => {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetch('http://localhost:1337/api/pages?populate=deep');
      const json = await data.json();
      const pageData = mapData(json);
      setData(pageData[0]);
    };

    if (isMounted.current) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <h1>Página não encontrada.</h1>;
  }

  if (data && !data.slug) {
    return <h1>Carregando...</h1>;
  }

  return <Base {...mockBase} />;
};
