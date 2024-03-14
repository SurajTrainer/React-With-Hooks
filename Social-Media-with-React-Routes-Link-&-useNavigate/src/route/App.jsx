
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Sidebar from '../component/Sidebar'
import CreateForm from '../component/CreateForm'
import { useState } from 'react'
import PostListProvider from '../store/post-list-store'
import PostList from '../component/PostList'
import { Outlet } from 'react-router-dom'


function App() {

  const [selectedTab, setSelectedTab] = useState('Home');

  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="app-content">
            <Header />
            {/* {selectedTab === 'Home' ? <PostList /> : <CreateForm />} */}
            <Outlet/>
            <Footer />
          </div>
        </div>
        </PostListProvider>
    </>
  )
}

export default App
