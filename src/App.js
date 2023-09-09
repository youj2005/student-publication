import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import { useState } from "react"
import Content from './components/Content';

const App = () => {

  const [topics, setTopics] = useState([
    {
      id:1,
      text: 'Stories',
    },
    {
      id:2,
      text: 'Opinions',
    },
    {
      id:3,
      text: 'Investigations',
    },
    {
      id:4,
      text: 'Mission Statement'
    }
  ])

  return (
    <>
      <Navbar topics={topics}></Navbar>
      <Title></Title>
      <Content></Content>
    </>
  );
}

export default App;
