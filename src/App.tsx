import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { configure } from 'mobx'
import { observer, Provider } from 'mobx-react'
import { enableLogging } from 'mobx-logger'
import { ToastContainer, Slide } from 'react-toastify'

import {
   E_COMMERCE_SIGN_IN_PATH,
   E_COMMERCE_PRODUCTS_PATH
} from './constants/RouteConstants'

import GridMemoryGame from './components/GridMemoryGame'
import CarsList from './components/CarsList/index'
import TodosApp from './components/TodosApp'
import CountryDetails from './components/CountryDetails'
import CountryDashboard from './components/CountryDashboard'
import EmojiGame from './components/EmojiGame'
import CounterApp from './components/CounterApp'
import Home from './components/Home'
import ThemesList from './components/ThemesList'
import MobxCarsList from './components/MobxCarsList'
import ProductsPage from './components/ProductsPage'
import SignInRoute from './components/ECommerceStore/SignInRoute'
import UsersPage from './components/UsersPage'
import PracticeAdvancedConcepts from './components/PracticeAdvancedConcepts'

import stores from './stores'
import { ProtectedRoute } from './components/ProtectedRoute'

const { themeStore } = stores

//configure({ enforceActions: true })

const config = {
   predicate: () => true,
   action: true,
   reaction: true,
   transaction: true,
   compute: true
}

// enableLogging(config)

@observer
class App extends React.Component {
   onChangeTheme = () => {
      themeStore.updateTheme()
   }

   getTheme = () => {
      return themeStore.selectedTheme
   }

   render() {
      return (
         <Provider {...stores}>
            <ToastContainer
               transition={Slide}
               position='bottom-center'
               autoClose={3000}
               hideProgressBar
               newestOnTop={false}
               closeOnClick
               closeButton={false}
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
            />
            <Router history={history}>
               <Switch>
                  <Route path='/users' component={UsersPage} />
                  <Route path='/mobx-cars-list'>
                     <MobxCarsList />
                  </Route>
                  <Route path='/themes-list'>
                     <ThemesList />
                  </Route>
                  <Route path='/todoslist'>
                     <TodosApp />
                  </Route>
                  <Route path='/carslist'>
                     <CarsList />
                  </Route>
                  <Route path={`/countryList/:countryId`}>
                     <CountryDetails
                        selectedTheme={this.getTheme()}
                        onChangeTheme={this.onChangeTheme}
                     />
                  </Route>
                  <Route path='/countryList'>
                     <CountryDashboard
                        selectedTheme={this.getTheme()}
                        onChangeTheme={this.onChangeTheme}
                     />
                  </Route>
                  <Route path='/emoji-game'>
                     <EmojiGame />
                  </Route>
                  <Route path='/counter-app'>
                     <CounterApp />
                  </Route>
                  <Route path='/grid-game'>
                     <GridMemoryGame />
                  </Route>
                  <Route path={E_COMMERCE_SIGN_IN_PATH}>
                     <SignInRoute />
                  </Route>
                  <ProtectedRoute
                     exact
                     path={E_COMMERCE_PRODUCTS_PATH}
                     component={ProductsPage}
                  />
                  <Route path='/practice-advanced-concepts'>
                     <PracticeAdvancedConcepts />
                  </Route>
                  <Route path='/'>
                     <Home />
                  </Route>
                  <Route path='*'>
                     {() => {
                        return <div>404 not found</div>
                     }}
                  </Route>
               </Switch>
            </Router>
         </Provider>
      )
   }
}

export default App
