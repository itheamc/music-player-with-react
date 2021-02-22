import logo from './logo.svg';
import './App.css';
import { Flex } from '@chakra-ui/react'
import UserInterface from './components/UserInterface'

function App() {
  return (
    <Flex w = "100vw" h = "100vh" className="App" align = "center" justify = "center">
      <UserInterface />
    </Flex>
  );
}

export default App;
