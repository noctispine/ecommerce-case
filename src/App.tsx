import {AppLayout} from "./components/Styles/Layout"
import Header from "./components/Header/index"
import ProductList from "./components/ProductList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActionCreators } from "./redux/reducers/products/reducer";
import { RootState } from "./redux/reducers/rootReducer";
import { companyActionCreators } from "./redux/reducers/companies/reducer";
import Footer from "./components/Footer";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productActionCreators.fetchStart())
    dispatch(companyActionCreators.fetchStart())
  }, [dispatch])


  
  return (
    <AppLayout> 
      <Header />
      <ProductList />
      <Footer />
    </AppLayout>
  );
}

export default App;