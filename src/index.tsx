import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: '6268760aaef4ed159d33c550',
    context: {
      kind: "multi",
      user: {
        key: "123321abc",
      },
    },
  }
  );

root.render(
  <React.StrictMode>
    <LDProvider>
      <App />
    </LDProvider>
  </React.StrictMode> 
  
);
})();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
