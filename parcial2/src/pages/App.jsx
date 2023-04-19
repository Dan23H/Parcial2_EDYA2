import { GetPosts } from '../components/GetPosts';
import { Counter } from '../components/Counter';
import './App.css';

export const App = () => {
  const [num, setNum] = useState(1)
  const handleSum = () => {
    setNum(num + 1)
  }
  const handleRes = () => {
    setNum(num - 1)
  }
  return (
    <Counter handleSum={handleSum} handleRes={handleRes} num={num} />
    <GetPosts album={1}/>
  )
}