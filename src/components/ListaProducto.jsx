import { data } from "../data";
import { Link } from "react-router-dom";
import { usarContexto } from "../context";


const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const { establecerInformacion } = usarContexto();
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  
  const enviarDatos = (product) => {

    let nuevoDiseno = {
      nombre: product.nameProduct,
      img: product.img,
      price: product.price,
      imgBack:product.imgBack
    };
    console.log('Datos enviados:', nuevoDiseno);
    establecerInformacion(nuevoDiseno);
   
    
  };
 

  return (
    <div className="container-items">
      {data.map((product) => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.img} alt={product.nameProduct} />
          </figure>
          <div className="info-product">
            <h2>{product.nameProduct}</h2>
            <p className="price">${product.price} Dolares</p>
            <div className="container-botonesDiseno">
              <button onClick={() => onAddProduct(product)}>
                Añadir al carrito
              </button>
              <Link to={"/disenoImagen"}>
                
                <button onClick={() => enviarDatos(product)}>Diseñar</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="container-boton-volver">
        <Link to={"/Inicio"}>
          {" "}
          <h1 className="volverDiseñar">Volver</h1>
        </Link>
      </div>
    </div>
  );
};
export default ProductList;

