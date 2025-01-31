// import axios from 'axios';
// import React, { useState } from 'react';

// function Url() {
//      const url = "https://cake-server-7c9k.onrender.com"
//    const [formData, setFormData] = useState({
//     image:"",
//     name: '',
//     description: '',
//     category: 'Cake',
//     price: '',
//    })
//    // handel for formData
//    const handelChange =(e)=>{
//     const {name, value} = e.target;
//     setFormData((prevData)=>({
//      ...prevData,
//      [name] : value,
//     }));
//    };

//    //handel for image 
//    const handelImageChange = (e) =>{
//     setFormData((prevData)=> ({
//       ...prevData,
//       image: e.target.files[0]
//     }));
//    };

//     const handelSubmit = async (e) =>{
//       e.preventDefault();
//       const data = new FormData();
//       data.append("image", formData.image);
//       data.append("name", formData.name);
//       data.append("description", formData.description);
//       data.append("category", formData.category);
//       data.append("price", formData.price);

//       const response = await axios.post(`${url}/api/cake/add`, data);
//       if (response.data.success){
//         setFormData({
//           image:"",
//           name: '',
//           description: '',
//           category: 'Cake',
//           price: '',
//         })
//       }
//       else{
//         console.log(); 
//       }
//       };
//   return (
//     <div className=' flex items-center justify-center min-h-screen bg-pink-200'>
//        <form  onSubmit={handelSubmit} className='bg-white w-full flex flex-col gap-6 max-w-md p-6 justify-center '>
//         <label>Product Image</label>
//         <input type="file" className='p-2 border rounded-md' 
//         onChange={handelImageChange}
         
//         />

//         <label htmlFor="">Product Name</label>
//         <input type=" text" className='p-2 border rounded-md '  
//          id="name"
//          name="name"
//         onChange={handelChange}
//         value={formData.name}
//         />

//         <label htmlFor="">Product Description</label>
//         <textarea
//             id="description"
//             name="description"
//             className="p-2 border rounded-md"
//             rows="4"
//             onChange={handelChange}
//             value={formData.description}
//           />

//         <label htmlFor="">Product Category</label>
//          <select name="category" id="category" 
//           onChange={handelChange}
//           value={formData.category}
//          className="p-2 border rounded-md">
//          <option value="Cake">Cake</option>
//             <option value="Cupcake">Cupcake</option>
//             <option value="Donut">Donut</option>
//             <option value="Other">Other</option>
//          </select>

//          <label htmlFor="">Price</label>
//          <input
//           onChange={handelChange}
//           value={formData.price}
//             type="number"
//             id="price"
//             name="price" 
//             placeholder="$20"
//             className="p-2 border rounded-md"
//           />

//           <button className=' bg-blue-400  text-white p-2 rounded-lg mt-5'>Upload</button>
//        </form>
//     </div>
//   );
// }

// export default Url



 
 