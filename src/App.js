import './App.css';

import MyComponent from './Components/MyComponent';
import { DependencyProvider } from './Contexts/DependecyProvider';

function App() {
  const myService = {
    callMe: () => { console.log('this is some dependency') }
  }

  return (
    <DependencyProvider myService={myService}>
      <MyComponent></MyComponent>
    </DependencyProvider>
  );
}

export default App;
