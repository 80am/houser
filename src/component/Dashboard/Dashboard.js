import React, { Component } from 'react';
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'


class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            houses:[{

            }]
        }

    }

    componentDidMount (){
        console.log('componentDidMount')
        axios.get('/api/houses').then(res => this.setState({ houses: res.data}),console.log(this.state.houses))
        
    }

    render() {

        var listHouses = this.state.houses
        var displayItems = listHouses.map((item, index) => {
         let {name, address, city, state} = item
            return (
             <div key = {index}>
                 <House
                 personName = {name}
                 address = {address}
                 city = {city}
                 state = {state}

                 />
             </div>
     )
        })
        return (
            <div>
                < p > Dashboard</p >
                <p>{displayItems}</p>
                {/* <House /> */}
                <Link to='../Wizard/Wizard.js'>
                    <button>Add New Property</button>
                </Link>

            </div>
        )
    }
}

export default Dashboard


// if (productInventory.length > 0) {
//     let productInfo = productInventory.map((item, index) => {
//         let {product_name, price, image_url, product_id} = item

//         return (
//                 <div key = {index}>
//                     <Product
//                     productName = {product_name}
//                     price = {price}
//                     imageURL = {image_url}
//                     productid = {product_id}
//                     updateProduct = {this.props.updateProduct}
//                     delete = {this.props.delete}
//                     />
//                 </div>
//         )
//     })
//     return productInfo
// }