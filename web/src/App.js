import React, {component, Component} from 'react'
import { Route, Switch, Router } from 'react-router-dom'
// We will create these two pages in a moment
import ProfilePage from './pages/ProfilePage'
import UserPage from './pages/UserPage'
import Toolbar from './pages/Toolbar'
import SideDrawer from './pages/SideDrawer'
import Backdrop from './pages/Backdrop'
import drawerToggleButton from './pages/DrawerToggleButton'
import { render } from 'react-dom'



class App extends Component {

  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }


  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }
  

  render(){
    let backdrop;
    
    if (this.state.sideDrawerOpen) {

      backdrop = <Backdrop click={this.backdropClickHandler}  />
      
    }

  return (
    <Switch>
      <div style = {{height:'100%'}} >
            
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
      <main style= {{marginTop:'64px'}}>
            <Route exact path="/" component={ProfilePage} />
            <Route path="/:id" component={UserPage} />
          </main>
          </div>
          </Switch>
  )
}
}

export default App;

