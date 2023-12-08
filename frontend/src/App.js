import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Header />
        <Container className='py-3'>
        <main>
          <Outlet />
      </main>
        </Container>
      <Footer/>
    </div>
  )
}

export default App