import { ReactElement } from "react";
import { useSelector } from "react-redux";
import cartIcon from "../../../../Assets/shopping-cart-icon.svg";
import TableMolecule from "../../../../Components/Molecules/Table";
import { RootState } from "../../../../Redux/Stores/AppStore";
import useTableProducts from "./Hooks/TableProducts";

const ProductsPage = (): ReactElement => {
  const quantityItems = useSelector((state: RootState) => state.cart.quantity);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const products = useTableProducts();

  return (
    <>
      <h1>
        Products
        <button type="button" className="btn btn-default position-relative">
          <img src={cartIcon} alt="cart" width="32" height="32" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {quantityItems}
          </span>
        </button>
      </h1>
      <TableMolecule
        data={products.data}
        header={products.header}
        className={products.className}
      />
      <br />
      <br />
      {JSON.stringify(cartItems)}
    </>
  );
};

export default ProductsPage;
