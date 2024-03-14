import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './route/App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateForm from './component/CreateForm.jsx'
import PostList from './component/PostList.jsx'

const router = createBrowserRouter([
  {path:'/', element : <App/> , children : [
    {path:'/', element : <PostList/>},
    {path : 'create-form' , element : <CreateForm/>}
  ]},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
