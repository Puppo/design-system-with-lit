// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@ds/beauty-react';

export function App() {
  return (
    <>
      <h1>Hello, to my cool design system!</h1>

      <Button
        type="button"
        size="medium"
        onclick={e => {
          alert('Hey, I clicked my button!');
        }}
        oncustomover={e => {
          console.log('Hey, hover of my button!');
        }}
      >
        Click me
      </Button>
    </>
  );
}

export default App;
