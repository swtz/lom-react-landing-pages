import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => r.toUpperCase())
      .catch((error) => console.log(error.name, error.message));
  };

  return (
    <div>
      <Heading />
      <Button text="Increase +1" onButtonClick={actions.increase} />
      <Button text="Decrease -1" onButtonClick={actions.decrease} />
      <Button text="Reset" onButtonClick={actions.reset} />
      <Button
        text="Set Counter to 10"
        onButtonClick={() => actions.setCounter({ counter: 10 })}
      />
      <Button
        text="Set Counter to 100"
        onButtonClick={() => actions.setCounter({ counter: 100 })}
      />
      <Button
        disabled={state.loading}
        text="Async Increase +1"
        onButtonClick={actions.asyncIncrease}
      />
      <Button
        disabled={state.loading}
        text="Async Error"
        onButtonClick={handleError}
      />
    </div>
  );
};
