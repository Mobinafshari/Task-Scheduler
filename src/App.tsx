import '@config/i18n';
import Home from '@pages/Home';
import { ReactFlowProvider } from 'reactflow';

function App() {
  return (
    <ReactFlowProvider>
      <Home />
    </ReactFlowProvider>
  );
}

export default App;
