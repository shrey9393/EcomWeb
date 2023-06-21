import NavBar from "../features/navbar/Navbar";
import { ProductDetails } from "../features/product-list/components/ProductDetails";

function ProductDetailsPage() {
  return (
    <>
      <NavBar>
        <ProductDetails />
      </NavBar>
    </>
  );
}

export default ProductDetailsPage;