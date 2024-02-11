import './App.css'
import Header from './assets/my components/Header/Header'
import Accueil from './assets/my components/Accueil/Accueil'

function App() {


  return (
    <>
      <div className="fixed w-full z-[1000] -mt-52">
        <Header></Header>
      </div>
      <Accueil />

    </>
  )
}

export default App
