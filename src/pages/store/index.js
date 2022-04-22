import React from 'react';
import Layout from '../../components/Layout';
import logo from './logo.svg';

import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <Layout title="Store" description="This is the Store page" >
            <div >
                <div className="text-center mt-5">
        	      <img src={logo} className="App-logo" alt="logo" width= "10%"/>
                    <h1>Octank Store</h1>
                    <p>This is the Octank Store Page.</p>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;