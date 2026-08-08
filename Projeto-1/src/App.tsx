import './App.css'
import Btn from './components/Btn/Btn'
import CardUser from './components/CardUser/CardUser'

function App() {

  return (
    <>
      <Btn texto='Salvar' corDeFundo='green'/>
      <Btn texto='Editar' corDeFundo='yellow'/>
      <Btn texto='Excluir' corDeFundo='red'/>

      <CardUser 
        nome='João'
        cargo='Gerente'
        foto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvq26wOg0Zi4H-gLYQKJsHN1IhEoteb3j2cn9u__ifA&s=10'
      />

      <CardUser 
        nome='Mario'
        cargo='Dono'
        foto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvq26wOg0Zi4H-gLYQKJsHN1IhEoteb3j2cn9u__ifA&s=10'
      />

      <CardUser 
        nome=''
        cargo='Gerente'
        foto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvq26wOg0Zi4H-gLYQKJsHN1IhEoteb3j2cn9u__ifA&s=10'
      />
    </>
  )
}

export default App