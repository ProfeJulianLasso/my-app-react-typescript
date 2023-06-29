import { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonAtom, {
  ButtonAtomProps,
} from "../../../../../Components/Atoms/Button";
import SelectAtom, {
  SelectAtomProps,
} from "../../../../../Components/Atoms/Select";
import { TableMoleculeProps } from "../../../../../Components/Molecules/Table";
import { addItemToCart } from "../../../../../Redux/Slices/CartSlice";

type ProductQuantity = {
  id: string;
  quantity: number;
};

const useTableProducts = (): TableMoleculeProps => {
  const dispatch = useDispatch();
  const [quantityProducts, setQuantityProducts] = useState<ProductQuantity[]>([
    { id: "1", quantity: 0 },
    { id: "2", quantity: 0 },
    { id: "3", quantity: 0 },
    { id: "4", quantity: 0 },
    { id: "5", quantity: 0 },
  ]);

  const selectProduct1 = {
    id: "product1",
    className: "form-control w-auto",
    options: [
      { value: "0", label: "0" },
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
    ],
    onChange: (event) => {
      const productsQuantity = quantityProducts.map((product) => {
        if (product.id === "1") {
          product.quantity = parseInt(event.target.value);
        }
        return product;
      });
      setQuantityProducts(productsQuantity);
    },
  } as SelectAtomProps;
  const btnProduct1 = {
    text: "Add to cart",
    className: "btn btn-primary",
    onClick: () => {
      if (quantityProducts[0].quantity > 0)
        dispatch(
          addItemToCart({
            id: 1,
            name: "Product 1",
            price: 100,
            quantity: quantityProducts[0].quantity,
          })
        );
    },
  } as ButtonAtomProps;

  const selectProduct2 = {
    id: "product2",
    className: "form-control w-auto",
    options: [
      { value: "0", label: "0" },
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
    ],
    onChange: (event) => {
      const productsQuantity = quantityProducts.map((product) => {
        if (product.id === "2") {
          product.quantity = parseInt(event.target.value);
        }
        return product;
      });
      setQuantityProducts(productsQuantity);
    },
  } as SelectAtomProps;
  const btnProduct2 = {
    text: "Add to cart",
    className: "btn btn-primary",
    onClick: () => {
      if (quantityProducts[1].quantity > 0)
        dispatch(
          addItemToCart({
            id: 2,
            name: "Product 2",
            price: 200,
            quantity: quantityProducts[1].quantity,
          })
        );
    },
  } as ButtonAtomProps;

  const selectProduct3 = {
    id: "product3",
    className: "form-control w-auto",
    options: [
      { value: "0", label: "0" },
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
    ],
    onChange: (event) => {
      const productsQuantity = quantityProducts.map((product) => {
        if (product.id === "3") {
          product.quantity = parseInt(event.target.value);
        }
        return product;
      });
      setQuantityProducts(productsQuantity);
    },
  } as SelectAtomProps;
  const btnProduct3 = {
    text: "Add to cart",
    className: "btn btn-primary",
    onClick: () => {
      if (quantityProducts[2].quantity > 0)
        dispatch(
          addItemToCart({
            id: 3,
            name: "Product 3",
            price: 300,
            quantity: quantityProducts[2].quantity,
          })
        );
    },
  } as ButtonAtomProps;

  const selectProduct4 = {
    id: "product4",
    className: "form-control w-auto",
    options: [
      { value: "0", label: "0" },
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
    ],
    onChange: (event) => {
      const productsQuantity = quantityProducts.map((product) => {
        if (product.id === "4") {
          product.quantity = parseInt(event.target.value);
        }
        return product;
      });
      setQuantityProducts(productsQuantity);
    },
  } as SelectAtomProps;
  const btnProduct4 = {
    text: "Add to cart",
    className: "btn btn-primary",
    onClick: () => {
      if (quantityProducts[3].quantity > 0)
        dispatch(
          addItemToCart({
            id: 4,
            name: "Product 4",
            price: 400,
            quantity: quantityProducts[3].quantity,
          })
        );
    },
  } as ButtonAtomProps;

  const selectProduct5 = {
    id: "product5",
    className: "form-control w-auto",
    options: [
      { value: "0", label: "0" },
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
    ],
    onChange: (event) => {
      const productsQuantity = quantityProducts.map((product) => {
        if (product.id === "5") {
          product.quantity = parseInt(event.target.value);
        }
        return product;
      });
      setQuantityProducts(productsQuantity);
    },
  } as SelectAtomProps;
  const btnProduct5 = {
    text: "Add to cart",
    className: "btn btn-primary",
    onClick: () => {
      if (quantityProducts[4].quantity > 0)
        dispatch(
          addItemToCart({
            id: 5,
            name: "Product 5",
            price: 500,
            quantity: quantityProducts[4].quantity,
          })
        );
    },
  } as ButtonAtomProps;

  return {
    className: "table table-hover",
    header: ["#", "Name", "Price", "Quantity", "Actions"],
    data: [
      [
        "1",
        "Product 1",
        "100",
        <SelectAtom {...selectProduct1} />,
        <ButtonAtom {...btnProduct1} />,
      ],
      [
        "2",
        "Product 2",
        "200",
        <SelectAtom {...selectProduct2} />,
        <ButtonAtom {...btnProduct2} />,
      ],
      [
        "3",
        "Product 3",
        "300",
        <SelectAtom {...selectProduct3} />,
        <ButtonAtom {...btnProduct3} />,
      ],
      [
        "4",
        "Product 4",
        "400",
        <SelectAtom {...selectProduct4} />,
        <ButtonAtom {...btnProduct4} />,
      ],
      [
        "5",
        "Product 5",
        "500",
        <SelectAtom {...selectProduct5} />,
        <ButtonAtom {...btnProduct5} />,
      ],
    ],
  } as TableMoleculeProps;
};

export default useTableProducts;
