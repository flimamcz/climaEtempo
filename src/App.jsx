import './assets/styles/Global.css'
import { GlobalData } from './contexts/GlobalContext'
import Home from './pages/Home/'

function App() {

  return (
      <GlobalData>
        <Home />
      </GlobalData>
  )
}

export default App
