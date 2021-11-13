import React,{useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

import Dropdown from './components/Dropdown'
import InfoSection from './components/InfoSection'
import GlobalStyle from './globalStyles'
import { SliderData } from './data/SliderData'
import { InfoData } from './data/InfoData'


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  console.log('isO',isOpen)
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <GlobalStyle/>
            <Hero slides={SliderData}/>
            <InfoSection {...InfoData}/>

          </Route>
          <Route exact path="/about">
            <GlobalStyle/>
            <Navbar toggle ={toggle} style={{marginBottom: "100px"}}/>
            <Dropdown isOpen ={isOpen} toggle ={toggle}/>
            <SignIn {...InfoData} />
          </Route>
          <Route exact path="/SignUp">
            <GlobalStyle/>
            <Navbar toggle ={toggle}/>
            <Dropdown isOpen ={isOpen} toggle ={toggle}/>
            <SignUp {...InfoData} />
          </Route>
          <Route exact path="/signIn">
            <GlobalStyle/>
            <Navbar toggle ={toggle}/>
            <Dropdown isOpen ={isOpen} toggle ={toggle}/>
            <SignIn {...InfoData} />
          </Route>
         
        </Switch>
      </Router>
  );
 }
export default App