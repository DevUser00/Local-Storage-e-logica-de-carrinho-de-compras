import './style.css';
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productServices from '../../../services/product-services'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as cartServices from '../../../services/cart-services'

export default function ProductDetails() {

   const navigate = useNavigate();

   const params = useParams();

   const product = productServices.findById(Number(params.productId));


   function handleBuyClick() {
      if (product) {
         cartServices.addProduct(product);
         navigate("/cart")
      }
   }

   return (
      <>
         <main>
            <section id="product-details-section" className="dsc-container">

               {
                  product &&
                  <ProductDetailsCard product={product} />
               }

               <div className="dsc-btn-page-container">
                  <div onClick={handleBuyClick}>
                     <ButtonPrimary text="Comprar" />
                  </div>

                  <Link to={`/`}>
                     <ButtonInverse text="Inicio" />
                  </Link>
               </div>
            </section>
         </main>
      </>
   );
}