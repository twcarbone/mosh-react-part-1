import { useEffect, useState } from "react";

interface Props {
  category: string;
}

function ProductList({ category }: Props) {
  const [products, setProducts] = useState<string[]>([]);

  // Second argument to useEffect hook is dependency array. Without it, the effect is run
  // after every render. An empty array will run the effect hook only once the first time
  // the component is rendered. Populating the array with any props or state variables
  // will re-run the effect when any of these values change.
  useEffect(() => {
    console.log("Fetching products in ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <div>ProductList</div>;
}

export default ProductList;
