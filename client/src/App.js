import Header from './components/Header/Header';
import DataFeedTable from './components/DataFeedTable/DataFeedTable';
import ActivePredictions from './components/ActivePredictions';
import { useMoralis } from 'react-moralis';

function App() {
  const { isInitialized } = useMoralis();

  return (
    <>
      <Header />
      <DataFeedTable />
      {
        isInitialized && (
          <>
            <ActivePredictions />
            {/* {
              isAuthenticated && (
                <>
                  <SendFromEscrowAddress />
                  <SendFromClientAddress />
                  <UserBetsTable />
                </>
              ) 
            } */}
          </>
        )
      }
    </>
  );
}

export default App;