import './App.css';
import {Header, Footer} from './Components/Header-Footer';
import Card from './Components/Card'
import imglink from './a.jpg'

function App() {
  return (
    <div className="App">
      <Header admin={0} /> 
    <main className="section">
      <Card imgurl={imglink} title="Foto" descricao="Itajubá" price="R$ 500,00"/> 
    </main> 
    <Footer />
    </div>
  );
}

export default App;
