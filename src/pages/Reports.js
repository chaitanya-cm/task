import React, {useEffect, useState} from 'react';
import firebase from '../Backend/firebase'

function Reports() {

  const [users, setUsers] = useState([]);
  const [newCategory, setnewCategory] = useState();
    
  const [info, setinfo] = useState({
    Sales: "",
    profit : "",
    total: "",
      
  }) 

  const show = () => {
    
    if(newCategory == 'SelectReport'){
      alert("Select Item First");
    }else{
    // const ref1 = app.firestore();
    const ref1 = firebase.firestore();
    ref1.collection("Reports").doc(newCategory).get()
    .then(snapshot=>{setinfo({...info, 
      Sales: snapshot.get("Sales"),
      profit: snapshot.get("profit"),
      total: snapshot.get("total")
      })  
  }); 
}
  }


  return (
    <div className='reports'>
      <div className='prod-details'>
         <select className='prod-nm' onChange={(e) => {setnewCategory(e.target.value);}}>
           <option className='select' value="SelectRepost">Select Report</option>
           <option className='prod1' value="report1">Report 1</option>
           <option className='prod2' value="report2">Report 2</option>
           <option className='prod3' value="report3">Report 3</option>
         </select><br></br>
        </div>  
        <input className="btn" type="submit" name="submit" value="View Report"
                           onClick={show} />
        <div>
        <div className="">
  
                   <table className="fw-normal ms-5">
                       <tr>
                           <th>Total Sales </th>
                           <th className="fw-normal ps-2"> : {info.Sales}</th>
                       </tr>
                       <tr>
                           <th>Total Profit </th>
                           <th className="fw-normal ps-2"> : {info.profit}</th>
                       </tr>
                       <tr>
                           <th>Total Margin </th>
                           <th className="fw-normal ps-2"> : {info.total}</th>
                       </tr>
                    </table>
               </div>
        </div>
    </div>
  );
}

export default Reports;