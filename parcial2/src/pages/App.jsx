import { GetPosts } from '../components/GetPosts';
import { Counter } from '../components/Counter';
import './App.css';

export const App = () => {
  // la idea era colocar un contador para que filtrara el número de los álbumes,
  // sin embargo, me quedé sin tiempo
  return (
    <>
      <GetPosts album={1} />
    </>

  )
}