import Card from './components/Card'
import "./styles.css";

function App() {
  return( 
  <div className="App">
    <Card food = "Pizza" calory ="56" />
    <Card food = "Burger" calory ="69" />
    <Card food = "Coke" calory ="500" />
    <Card food = "Browne" calory ="180" />
    <Card food = "Fried Rice" calory ="90" />
    <Card food = "Lassania" calory ="200" />
    <Card food = "Pani Puri" calory ="10" />
    <Card food = "Dosa" calory ="250" />
    <Card food = "Burger" calory ="200" />
  </div>
  )
}

export default App;
