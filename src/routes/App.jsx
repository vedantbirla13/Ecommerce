import Footer from "../components/Footer"
import Header from "../components/Header"
import {Outlet} from "react-router-dom"
import "../index.css"
import FetchItems from "../components/FetchItems"
import { useSelector } from "react-redux"
import LoadingSpinner from "../components/LoadingSpinner"

function App() {

  const fetchStatus  = useSelector(store => store.fetchStatus)
  
  return (
    <>
  <Header />
  {
    fetchStatus.currentlyFetching ? <LoadingSpinner /> : 
   <Outlet />
  }
  <FetchItems />
    <Footer />
    </>
  )
}

export default App
