import React from 'react'
import { Link, Redirect } from 'react-router-dom'

class Home extends React.Component {
   gotoGridScreenIfLoggedIn = () => {
      return (
         <Redirect
            to={{
               pathname: '/grid-game'
            }}
         />
      )
   }

   render() {
      return (
         <div>
            <div className='pl-5 pt-5 font-bold text-3xl'> Projects </div>
            <nav>
               <ul className='pl-10 font-bold text-xl underline text-blue-500'>
                  <li>
                     <Link to='/'>Home</Link>
                  </li>
                  <li>
                     <Link to='/carslist'>Carslist</Link>
                  </li>
                  <li>
                     <Link to='/todoslist'>TodosList</Link>
                  </li>
                  <li>
                     <Link to='/countryList'>Country List</Link>
                  </li>
                  <li>
                     <Link to='/emoji-game'>Emoji Game</Link>
                  </li>
                  <li>
                     <Link to='/counter-app'>Counter App</Link>
                  </li>
                  <li>
                     <Link to='/themes-list'>Themes List</Link>
                  </li>
                  <li>
                     <Link to='/users'>Users page</Link>
                  </li>
                  <li>
                     <Link to='/grid-game'>Grid Memory Game</Link>
                  </li>
                  <li>
                     <Link to='/ecommerce-store/sign-in'>E-Commerce Store</Link>
                  </li>
                  <li>
                     <Link to='/practice-advanced-concepts'>
                        Practice Advanced Concepts
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>
      )
   }
}

export default Home
