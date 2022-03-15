import {AppLayout} from "./components/Styles/Layout"
import Header from "./components/Header/index"
import ProductList from "./components/ProductList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActionCreators } from "./redux/reducers/products/reducer";
import { RootState } from "./redux/reducers/rootReducer";

function App() {

  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.product)

  useEffect(() => {
    dispatch(productActionCreators.fetchStart())
  }, [dispatch])


  console.log(products)
  
  return (
    <AppLayout> 
      <Header />
      <ProductList />
    </AppLayout>
  );
}

export default App;