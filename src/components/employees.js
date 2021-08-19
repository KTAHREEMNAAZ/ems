import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
function Employee() {  
    const [data, setData] = useState([]);  
  
    useEffect(() => {  
        
          axios.get('https://dev.codebele.com:3006/getuser')  
            .then((response) =>{
                setData(response.data) 
                 console.log(response.data.data[0])  
            }).catch((error)=>{
                console.log(error)
            })
                 
        
    }, []); 
    return (  
        <div>  
            <div className="row" style={{ 'margin': "100px"}}>  
                <div className="col-sm-12 btn btn-info">  
                 
                 </div>  
            </div>  
            <table class="table" >  
                <thead class="thead-dark">  
                    <tr>  
                        <th scope="col">Id</th>  
                        <th scope="col">Name</th>  
                        <th scope="col">Email</th>  
                        <th scope="col">Phone</th>  
                        <th scope="col">Age</th>  
                        <th scope="col">Gender</th>  
                    </tr>  
                </thead>  
                <tbody>  
                    {data.map(item => {  
                        return <tr key={item.Id}>  
                            <td>{item.Id}</td>  
                            <td>{item.Name}</td>  
                            <td>{item.Email}</td>  
                            <td>{item.Phone}</td>  
                            <td>{item.Age}</td>  
                            <td>{item.Gender}</td>  
                        </tr>  
                    })}  
                </tbody>  
            </table>  
  
        </div>  
    )  
}  
  
export default Employee; 

// import axios from 'axios'

// const URL = 'https://dev.codebele.com:3006/getuser'

// const Table = () => {
//     const [employees, setEmployees] = useState([])

//     useEffect(() => {
// //         alert('')
// // axios.get('https://dev.codebele.com:3006/getuser').then((response)=>{
// //     console.log(response)
// // }).catch((error)=>{
// //     console.log(error)
// // })
//         getData()
//     }, [])

//     const getData = async () => {
//         const response = await axios.get(URL)
//         setEmployees(response.data)
//     }
//     const renderHeader = () => {
//         let headerElement = ['id',   'name',   'email',   'phone',  'age' , 'gender' ]

//         return headerElement.map((key, index) => {
//             return <th key={index}>{key.toUpperCase()}</th>
//         })
//     }

//     const renderBody = () => {
//         return employees && employees.map(({ id, name, email, phone,age,gender }) => {
//             return (
//                 <tr key={id}>
//                     <td>{id}</td>
//                     <td>{name}</td>
//                     <td>{email}</td>
//                     <td>{phone}</td>
//                     <td>{age}</td>
//                     <td>{gender}</td>
//                 </tr>
//             )
//         })
//     }

//     return (
//         <>
//             <h1 id='title'>React Table</h1>
//             <table id='employee'>
//                 <thead>
//                     <tr>{renderHeader()}</tr>
//                 </thead>
//                 <tbody>
//                     {renderBody()}
//                 </tbody>
//             </table>
//         </>
//     )
// }


// export default Table
// import React ,{Component}from 'react';
// import REACTDOM from 'react-dom'; 
// import{rows,table}from 'react-bootstrap';

// function Employees(props) {
//     return <div style={{border:"3px solid green"}}>
//          <p><label>Employee ID : <b>{props.data.Id}</b></label></p>
//          <p><label>Employee Name : <b>{props.data.Name}</b></label></p>
//          <p><label>Employee Age : <b>{props.data.Age}</b></label></p>
//          <p><label>Employee Gender : <b>{props.data.Gender}</b></label></p> 
//     </div>
// }
// function DisplayEmployees(props){
//     const empList=props.employeeList;
   

// const listElements=empList.map((emp)=>
//  <Employees key={emp.Id} data={emp}></Employees>
// );
// return (
//     <div>
//         {listElements}
//     </div>
// );
// }
// const employees = [
//     { id:1, name:"Rahul", age:"20", gender:"Male" },
//     { id:2, name:"Raju",  age:"24", gender:"Male" },
//     { id:3, name:"Meena", age:"21", gender:"Female"},
//     { id:4, name:"Sonam", age:"20",  gender:"Female"}
// ];
// const element=<DisplayEmployees employeeList={employees}></DisplayEmployees>
// REACTDOM.render(element,document.getElementById("root"));

  
 

// export default employees;