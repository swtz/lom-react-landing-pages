import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  const [state, actions] = useCounterContext();

  return (
    <div>
      <Heading />
      <Button text="Increase +1" onButtonClick={actions.increase} />
    </div>
  );
};
