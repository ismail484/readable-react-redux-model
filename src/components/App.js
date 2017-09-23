import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageNotFound from './common/PageNotFound'
import Home from './landing/Home'
import Posts from './post/Posts' 
import createBrowserHistory from 'history/createBrowserHistory'
import HeaderNavContainer from './landing/HeaderNavContainer'
import About from './About'
import PostDetail from './post/PostDetails'
import PostsList from './post/PostsList'
import Modal from './modal/Modal'

const history = createBrowserHistory();


const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>

                    <HeaderNavContainer />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/posts" component={Posts} />
                        <Route exact path ='/:category' component={PostsList} />
                        <Route path="/about" component={About} />
                        <Route exact path ='/:category/:id' component={PostDetail} />
                        <Route exact path ='/new' component={Modal} />
          
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App