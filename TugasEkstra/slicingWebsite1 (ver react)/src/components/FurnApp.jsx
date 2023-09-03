import React from "react";
import FurnHeader from "./FurnHeader";
import FurnBody from "./FurnBody";
import Data from "../firebase/data";
import FurnFooter from "./FurnFooter";


class FurnApp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            populerProducts: [this.fetchPopulerProducts()],
            productsMayLike: [this.fetchProductsMayLike()],
            topPickProducts: [this.fetchTopPickProducts()]
        }
    }

    fetchPopulerProducts = async(productName='sofa') => {
        const populerProducts = await Data.getProducts("populerProducts", productName);
        const image = await Data.getImage(`populerProducts/${productName}`)
        populerProducts.forEach((product, index)=>product.image=image[index])
        console.log(populerProducts)
        this.setState({populerProducts})
    }

    fetchProductsMayLike = async() =>{
        const productsMayLike = await Data.getProducts("productsMayLike", "chair")
        const image = await Data.getImage(`productsMayLike/chair`)
        productsMayLike.forEach((product, index)=>product.image = image[index])
        this.setState({productsMayLike})
    }

    fetchTopPickProducts = async() =>{
        const topPickProducts = await Data.getProducts("topPickProducts", "sofa")
        const image = await Data.getImage(`topPickProducts/sofa`)
        topPickProducts.forEach((product, index)=>product.image = image[index])
        this.setState({topPickProducts})
    }
    
    render(){
        return (
            <div>
                <FurnHeader></FurnHeader>
                <FurnBody populerProducts={this.state.populerProducts} productsMayLike={this.state.productsMayLike} topPickProducts={this.state.topPickProducts} fetchPopularProducts={this.fetchPopulerProducts}></FurnBody>
                <FurnFooter></FurnFooter>
            </div>
        )
    }
} 

export default FurnApp