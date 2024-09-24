import Landing from './components/Landing'
import About from './components/About'
import Portfolio from './components/Portfolio';
import Footer from './components/Footer'


function App() {

  return (
    <div className = "App">

      <Landing />
      <About />
      <Portfolio />
      <Footer id='footer' />

    </div>
  )
}

export default App