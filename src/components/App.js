import React, { Component } from 'react'
import { Router as Router, Route, Switch } from 'react-router-dom'
import PageNotFound from './common/PageNotFound'
import Home from './landing/Home'
import Posts from './post/Posts' 
import createBrowserHistory from 'history/createBrowserHistory'
import HeaderNavContainer from './landing/HeaderNavContainer'
import About from './About'
import PostDetail from './PostDetail'
import PostsList from './post/PostsList'
import Modal from './modal/Modal'
import Header from './Header'
import SideNav from './SideNav'



const history = createBrowserHistory();

class App extends Component {
render(){

    return (
        <div >
            <Router history={history}>
                <div>
               <HeaderNavContainer/>  
                    
                    <Switch>
                        <Route exact path="/" component={Posts} />
                        <Route path="/about" component={About} />
                        <Route path="/posts" component={Posts} />
                        <Route path="/home" component={Home} />
                        <Route exact path ='/category/:category' component={PostsList} />
                        <Route exact path ='/category/:category/:id' component={PostDetail} />
                        <Route  component={PageNotFound} />
                        <Route  exact path='/404'  component={PageNotFound} /> 
                    </Switch>

                </div>
            
            </Router>
        </div>
    )
}
}





export default App