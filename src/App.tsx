import { AppLayout } from './components/Styles/Layout'
import Header from './components/Header/index'
import ProductList from './components/ProductList'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { productActionCreators } from './redux/reducers/products/reducer'
import { companyActionCreators } from './redux/reducers/companies/reducer'
import Footer from './components/Footer'
import Filters from './components/Filters'
import Cart from './components/Cart/Cart'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productActionCreators.fetchStart())
    dispatch(companyActionCreators.fetchStart())
  }, [dispatch])

  return (
    <AppLayout>
      <Header />
      <Filters />
      <ProductList />
      <Cart />
      <Footer />
    </AppLayout>
  )
}

export default App
