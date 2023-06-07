import './App.css';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import All from './Component/All/All';
import Platforms from './Component/Platforms/Platforms';
import Pc from './Component/Pc/Pc';
import Browser from './Component/Browser/Browser';
import SortBy from './Component/Sortby/Sortby';
import ReleaseDate from './Component/ReleaseDate/ReleaseDate';
import Popularity from './Component/Popularity/Popularity';
import Alphabetical from './Component/Alphabetical/Alphabetical';
import Relevance from './Component/Relevance/Relevance';
import Categories from './Component/Categories/Categories';
import Racing from './Component/Racing/Racing';
import Shooter from './Component/Shooter/Shooter';
import Sports from './Component/Sports/Sports';
import Social from './Component/Social/Social';
import OpenWorld from './Component/OpenWorld/OpenWorld';
import Zombie from './Component/Zombie/Zombie';
import Fantasy from './Component/Fantasy/Fantasy';
import ActionRpg from './Component/ActionRpg/ActionRpg';
import Action from './Component/Action/Action';
import Flight from './Component/Flight/Flight';
import BattleRoyale from './Component/BattleRoyale/BattleRoyale';
import Gamedetails from './Component/Gamedetails/Gamedetails';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import NotFound from './Component/NoFound/NoFound';

function App() {








  let router= createBrowserRouter([
    {
      path:'', element:<Layout />,
      children:[
        {index:true, element:<Home/> },
        { path:'all', element: <All/>},
        {
          path:'platforms', element:   <Platforms/>
           
        ,  children:[
            {path:'pc', element:<Pc/>},
            {path:'browser', element:<Browser/>}
          ],
        },
        {
          path:'sort-by', element:   <SortBy/>
           
         , children:[
            {path:'release-date' , element:<ReleaseDate/>},
            {path:'popularity' , element:<Popularity/>},
            {path:'alphabetical' , element:<Alphabetical/>},
            {path:'relevance' , element:<Relevance/>},
          ],
        },
        {
          path:'categories', element:   <Categories/>
           
         , children:[
            {path:'racing' , element:<Racing/>},
            {path:'shooter' , element:<Shooter/>},
            {path:'sports' , element:<Sports/>},
            {path:'social' , element:<Social/>},
            {path:'open-world' , element:<OpenWorld/>},
            {path:'zombie' , element:<Zombie/>},
            {path:'fantasy' , element:<Fantasy/>},
            {path:'action-rpg' , element:<ActionRpg/>},
            {path:'action' , element:<Action/>},
            {path:'flight' , element:<Flight/>},
            {path:'battle-royale' , element:<BattleRoyale/>},
          ],
        },
        {
          path:'gamedetails/:id', element:   <Gamedetails/>
           
        },
        {path:'login', element:<Login />},
        {path:'register', element:<Register/>},
        {path:'*' ,element:<NotFound/>},

      ]
    }
  ])


  return <>
  <RouterProvider router={router}/>
  
  
  </>
}

export default App;
