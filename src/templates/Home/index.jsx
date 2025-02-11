import { useEffect } from 'react';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { mapData } from '../../api/map-data';

export const Home = () => {
  useEffect(() => {
    const load = async () => {
      const data = await fetch('http://localhost:1337/api/pages?populate=deep');
      const json = await data.json();
      const pageData = mapData(json);
      console.log(pageData);
    };

    load();
  }, []);

  return <Base {...mockBase} />;
};
