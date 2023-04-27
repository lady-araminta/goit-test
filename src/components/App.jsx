import { Card } from "./Card/Card";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <>
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card/>
      </div>
      <GlobalStyle/>
    </>
  );
};
