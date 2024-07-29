import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Cards from './Components/RowCards/Cards'
import {
  Orginals,
  Action,
  Romance,
  Documentaries,
  Horror
} from './constants/Url'
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards URL={Orginals} title='Netflix Orginals' main />
      <Cards URL={Action} title='Action' />
      <Cards URL={Romance} title='Romance' />
      <Cards URL={Documentaries} title='Documentaries' />
      <Cards URL={Horror} title='Horror' />
    </>
  )
}

export default App
