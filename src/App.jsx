import { Provider } from 'react-redux'
import './App.css'
import Body from './Components/Body'
import appStore from './utils/appStore'

function App() {
 

  return (
    <Provider store={appStore}>
      <div className=''> 
      <Body/>
    </div>
    </Provider>
  )
}

export default App
