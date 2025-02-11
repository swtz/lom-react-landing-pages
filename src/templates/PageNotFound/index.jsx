import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html="<p>A página que você buscou não existe. <a href='/'>Clique Aqui</a> para voltar.</p>"
    />
  );
};
