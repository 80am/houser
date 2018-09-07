import React, { Component } from 'react';
import {Link}from 'react-router-dom'


class Wizard extends Component {
    constructor(props){
        super(props)

        this.state={
            name:"",
            address:'',
            city:'',
            state:'',
            zipcode:''
        }

        this.handleInputname = this.handleInputname.bind(this)
        this.handleInputaddress = this.handleInputaddress.bind(this)
        this.handleInputcity = this.handleInputcity.bind(this)
        this.handleInputstate = this.handleInputstate.bind(this)
        this.handleInputzipcode = this.handleInputzipcode.bind(this)

    }

    handleInputname(e) {
        console.log(this.state.name)
        this.setState({
          name: e.target.value
        })
      }

      handleInputaddress(e) {
        console.log(this.state.address)
        this.setState({
          address: e.target.value
        })
      }

      handleInputcity(e) {
        console.log(this.state.city)
        this.setState({
          city: e.target.value
        })
      }

      handleInputstate(e) {
        console.log(this.state.state)
        this.setState({
          state: e.target.value
        })
      }

      handleInputzipcode(e) {
        console.log(this.state.zipcode)
        this.setState({
          zipcode: e.target.value
        })
      }

    render() {
        return (
            <div>
            < p > Wizard</p >
        <input type="text" value={this.state.name} placeholder='Name' onChange={this.handleInputname}/>
        <input type="text" value={this.state.address} placeholder='Address' onChange={this.handleInputaddress}/>
        <input type="text" value={this.state.city} placeholder='City' onChange={this.handleInputcity}/>
        <input type="text" value={this.state.state} placeholder='State' onChange={this.handleInputstate}/>
        <input type="text" value={this.state.zipcode} placeholder='ZipCode' onChange={this.handleInputzipcode}/>
        
           
            <Link to={'../'}>
            <button>Cancel</button>
            </Link>
            </div>
        )
    }
}

export default Wizard