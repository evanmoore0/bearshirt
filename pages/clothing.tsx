import Layout from "../components/Layout"
import CartSummary from "../components/CartSummary"
import Products from "../components/Products"
import Cart from "../components/Cart"

const Clothing = () => {
    return(
        <Layout>

            <div className="testCont">
                <Cart>
                    <CartSummary />
                    <Products />
                </Cart>

            </div>
            

        </Layout>
    )
}

export default Clothing