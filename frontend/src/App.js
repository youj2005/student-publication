import './App.css';
import Title from './components/Title';
import Content from './components/Content';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    <MainLayout>
      <Title></Title>
      <Content></Content>
    </MainLayout>
  );
}

export default App;
