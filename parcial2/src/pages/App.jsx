import { PostGrid } from '../components';
import './App.css';

export const App = () => {
  return (
    <>
      {
        postMessage.map(
          (post, key) => {
            return (<PostGrid />)
          }
        )
      }
    </>
  )
}