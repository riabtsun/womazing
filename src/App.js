import { Suspense } from 'react';
import Layout from './Layout/Layout';
import './i18n';
import './App.sass';

function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <div className="App">
        <Layout />
      </div>
    </Suspense>
  );
}

export default App;
