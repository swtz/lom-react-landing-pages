import { useCounterContext } from '../../contexts/CounterContext';
import { Button } from '../../components/Button';

export const Home = () => {
  const [state, actions] = useCounterContext();

  return (
    <div>
      <h1>{state.counter}</h1>
      <Button onButtonClick={actions.increase}>
        Clique aqui para incrementar
      </Button>
    </div>
  );
};
