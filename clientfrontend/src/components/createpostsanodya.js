
import React, { Component } from 'react'
import axios from 'axios'
//import './createposts.css';
import { Col, Row } from "react-bootstrap";

export default class createpostsanodya extends Component {

   constructor(props){
       super(props);
       this.state={
        OwnerName: "",
        Age:"",
        NationalID: "",
        Address:"",
        city:"",
        Province :"",
        ContactNumber:"",
        Email:""
       }
   }

   handleInputChange = (e) =>{
        const {name,value} = e.target;
               //validations
               let nam = e.target.name;
               if (nam === "ContactNumber") {

                if (!Number(value)) {

                    alert("Contact number must be numeric!");

            }

        }



        if (nam === "ContactNumber") {

            if (e.target.value.length > 10) {

                    alert ("Contact number contains more than 10 digits..!");

            } 

        }
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    

    onSubmit = (e) =>{
        e.preventDefault();
        const {OwnerName,Age, NationalID, Address, city, Province, ContactNumber, Email} = this.state;

        const data ={
          OwnerName : OwnerName,
          Age : Age,
          NationalID : NationalID,
          Address : Address,
          city : city,
          Province : Province,
          ContactNumber : ContactNumber,
          Email : Email
        }
       
        axios.post(`http://localhost:8000/postAnodya/save`,data).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                      OwnerName: "",
                      Age:"",
                      NationalID: "",
                      Address:"",
                      city:"",
                      Province :"",
                      ContactNumber:"",
                      Email:""
                    }
                )
            }
        })
  
    }

    render() {
        return (


           <div>
           
            

              <div style={{backgroundColor: "#080523"}}>
            
            
                <h1 className="h3 mb-3 font-weight-normal"><center   style={{color: " #EBEBEB",  fontweight : "500px"}} >Bus-Rental Registration Form</center></h1>
                <div>
       
                <img src="/bus2.jpg" class="mx-auto" alt="" width="1350px" height="420px"/>
             
             <center>
  
            <table border = "4" width = "750px" height = "500px" style={{backgroundColor: "#EBE6DC",  margin: "20px"}}>
      <tr>
        <th>
            <h5><center>You should fill this form in order to register your details.</center></h5>
                <h5 className="h3 mb-3 font-weight-normal"  font-weight="300">Bus-Owner Details</h5>
                <form className="needs-validation" noValidate>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{margineBottom:'5px'}}>Full Name : </label>
                        <input type="text"
                        className="form-control"
                        name="OwnerName"
                        placeholder="Enter your name with initials"
                        value={this.state.OwnerName}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{margineBottom:'5px'}}>Age : </label>
                        <input type="text"
                        className="form-control"
                        name="Age"
                        placeholder="Enter your age"
                        value={this.state.Age}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{margineBottom:'5px'}}>Natioal ID : </label>
                        <input type="text"
                        className="form-control"
                        name="NationalID"
                        placeholder="Enter your national identy card number"
                        value={this.state.NationalID}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{margineBottom:'5px'}}>Address : </label>
                        <input type="text"
                        className="form-control"
                        name="Address"
                        placeholder="Enter your permanent resident address"
                        value={this.state.Address}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{margineBottom:'5px'}}>City : </label>
                        <input type="text"
                        className="form-control"
                        name="city"
                        placeholder="Enter your main city"
                        value={this.state.city}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{margineBottom:'5px'}}>Province : </label>
                        <input type="text"
                        className="form-control"
                        name="Province"
                        placeholder="Enter your province"
                        value={this.state.Province}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{margineBottom:'5px'}}>Contact Number : </label>
                        <input type="text"
                        className="form-control"
                        name="ContactNumber"
                        placeholder="Enter your phone number"
                        value={this.state.ContactNumber}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{margineBottom:'5px'}}>Email Address : </label>
                        <input type="text"
                        className="form-control"
                        name="Email"
                        placeholder="Enter your Email Address ex: abc@gmail.com"
                        value={this.state.Email}
                        onChange={this.handleInputChange}/>
                    </div>

               
                    
<div>
                    <Row>
                        <Col>
                             <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                             <i className="far fa-check-square"></i>
                            &nbsp;save
                            </button> 
 
                         </Col>
                         <Col>
                         </Col>
                         <Col>
                            <button className = "btn btn-success"><a href = "/homeanodya" style = {{textDecoration:'none',color:'white',marginTop:'15px'}}>
                             <i className="far fa-check-square"></i>
                             Next
                             </a></button>
                         </Col>

                    </Row>
                    </div>
                </form>
                </th>
                    </tr>
                    </table>
                    </center>

</div>
            </div>
</div>

         
        )
    }
}
