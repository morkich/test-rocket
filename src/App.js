import PostLoop from './components/PostLoop/PostLoop';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  position: relative;
  padding: 0 10px;
  max-width: 1200px;
`;

function App() {

  return (
    <div className="App">
      <Container>      
        <main>        
          <PostLoop />
        </main>
      </Container>
    </div>
  );
}

export default App;
