import { GlobalStyle } from './GlobalStyle'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Card } from './Components/Card'
import { Nofound } from './Components/Nofound'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faMailchimp,
  faSquareTwitter,
  faSquareFacebook,
  faSquareInstagram,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons"; 


library.add(
  fas,
  faLinkedin,
  faMailchimp,
  faSquareTwitter,
  faSquareFacebook,
  faSquareInstagram,
  faSquareGithub
);

function App() {

  return (
    
     <BrowserRouter>
      <Routes>
        <Route path='/React-Business-Card' element={<Card />} />
        <Route path='/*' element={<Nofound />} />
      </Routes>
      <GlobalStyle />
     </BrowserRouter>
    
  )
}

export default App
