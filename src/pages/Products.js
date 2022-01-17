import React, {useState , useEffect} from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import app, { db } from '../Backend/firebase';
import ref from '../Backend/firebase';
// import ref from 'firebase/compat';
import firebase from '../Backend/firebase'
// import './App.css';
import './mainstyle.css'

function Products() {

  const [users, setUsers] = useState([]);
  const [newCategory, setnewCategory] = useState();
    
  const [info, setinfo] = useState({
      name: "",
      color : "",
      price: "",
      ram: "",
  }) 

  const show = () => {
    
    if(newCategory == 'SelectProduct'){
      alert("Select Item First");
    }else{
    // const ref1 = app.firestore();
    const ref1 = firebase.firestore();
    ref1.collection("Products").doc(newCategory).get()
    .then(snapshot=>{setinfo({...info, 
      name: snapshot.get("name"),
      color: snapshot.get("color"),
      price: snapshot.get("price"),
      ram: snapshot.get("ram")
      })  
  }); 
}
  }
 


  return (
    <div className='products'>
      <div className='prod-details'>
         <select className='prod-nm' onChange={(e) => {setnewCategory(e.target.value);}}>
           <option className='select' value="SelectProduct">SelectProduct</option>
           <option className='prod1' value="prod1">Product 1</option>
           <option className='prod2' value="prod2">Product 2</option>
           <option className='prod3' value="prod3">Product 3</option>
         </select><br></br>
        </div>  
        <div>
        <input className="btn" type="submit" name="submit" value="View Details"
                           onClick={show} />
        </div>
        <div>
        <div className="">
  
                   <table className="fw-normal ms-5">
                       <tr>
                           <th>Name </th>
                           <th className="fw-normal ps-2"> : {info.name}</th>
                       </tr>
                       <tr>
                           <th>Color </th>
                           <th className="fw-normal ps-2"> : {info.color}</th>
                       </tr>
                       <tr>
                           <th>Price </th>
                           <th className="fw-normal ps-2"> : {info.price}</th>
                       </tr>
                       <tr>
                           <th>Ram </th>
                           <th className="fw-normal ps-2"> : {info.ram}</th>
                       </tr>
          
                   </table>
               </div>
        </div>
      </div>    
  );
}

export default Products;