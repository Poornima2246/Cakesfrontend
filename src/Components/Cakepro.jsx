 
 

 

// // new file 
 
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import axios from "axios";
// import './Cakepro.css';

// function Cakepro() {
//   const [cakes, setCakes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [imageLoadedStates, setImageLoadedStates] = useState({}); // Track image loading states
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log("Fetching cakes...");
//         const response = await axios.get("http://localhost:4000/api/dessert/list");
//         console.log("Response data:", response.data);
//         setCakes(response.data.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching cakes:", err);
//         setError("Failed to fetch cakes. Please try again later.");
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to handle image load
//   const handleImageLoad = (id) => {
//     setImageLoadedStates((prev) => ({ ...prev, [id]: true }));
//   };

//   // Function to handle image error
//   const handleImageError = (id, e) => {
//     e.target.src = "/placeholder-image.png"; // Fallback image
//     setImageLoadedStates((prev) => ({ ...prev, [id]: true }));
//   };

//   if (loading) return <p>Loading cakes...</p>;
//   if (error) return <p className="text-red-600">{error}</p>;

//   return (
//     <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary font-fntprimary mt-5">
//           Our Creations
//         </h1>
        
//         <motion.div 
//            initial={{ y: -100, opacity: 0 }}
//            animate={{ y: 0, opacity: 1 }}
//            transition={{ duration: 1 }}
//            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-min"
//         >
//           {cakes.map((item) => (
//             <div
//               key={item._id}
//               className="product-card bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col transition-all duration-300"
//             >
//               <div className="aspect-w-16 aspect-h-10 overflow-hidden">
//                 <img
//                   src={item.mainImage}
//                   alt={item.name}
//                   className={`card-img hover:scale-110 transition-all duration-500 ${
//                     imageLoadedStates[item._id] ? 'opacity-100' : 'opacity-0'
//                   }`}
//                   loading="lazy"
//                   onLoad={() => handleImageLoad(item._id)} // Handle image load
//                   onError={(e) => handleImageError(item._id, e)} // Handle image error
//                 />
//               </div>
              
//               <div className="p-6 flex-grow">
//                 <p className="text-xl font-serif italic text-pink-600 leading-relaxed">
//                   {item.name}
//                 </p>
//               </div>
              
//               <div className="px-6 pb-6">
//                 <button
//                   className="w-full bg-pink-600 hover:bg-pink-700 text-white   font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform"
//                   onClick={() => navigate(`/product/${item._id}`)}
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   ); 
// }

// export default Cakepro;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './Cakepro.css'; // Ensure you import the CSS file

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageLoadedStates, setImageLoadedStates] = useState({}); // Track image loading states

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("https://cakesserver.onrender.com/products");
                setProducts(res.data); // Set the products data
                setLoading(false); // Set loading to false
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Failed to fetch products. Please try again later.");
                setLoading(false); // Set loading to false
            }
        };

        fetchProducts();
    }, []); // Fetch products on component mount

    // Function to handle image load
    const handleImageLoad = (id) => {
        setImageLoadedStates((prev) => ({ ...prev, [id]: true }));
    };

    // Function to handle image error
    const handleImageError = (id, e) => {
        e.target.src = "/placeholder-image.png"; // Fallback image
        setImageLoadedStates((prev) => ({ ...prev, [id]: true }));
    };

    if (loading) return <p>Loading products...</p>;
    if (error) return <p className="text-red-600">{error}</p>;

    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary font-fntprimary mt-5">
                    Our Menu
                </h1>
                
                <motion.div 
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-min"
                >
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="product-card bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col transition-all duration-300"
                        >
                            <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={`card-img hover:scale-110 transition-all duration-500 ${
                                        imageLoadedStates[product._id] ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    loading="lazy"
                                    onLoad={() => handleImageLoad(product._id)} // Handle image load
                                    onError={(e) => handleImageError(product._id, e)} // Handle image error
                                />
                            </div>
                            
                            <div className="p-6 flex-grow">
                                <p className="text-xl font-serif italic text-pink-600 leading-relaxed">
                                    {product.name}
                                </p>
                                
                            </div>
                            
                            <div className="px-6 pb-6">
                                <Link to={`/products/${product._id}`}>
                                    <button
                                        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform"
                                    >
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ProductPage;