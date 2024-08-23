import UserContexProvider from './context/UserContextProvider'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 

  return (
    <UserContexProvider>
      <h1 >Welcome to React page </h1>
      <Login/>
      <Profile/>
    </UserContexProvider>
  )
}

export default App
