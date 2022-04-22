import React from 'react';
import Layout from '../components/Layout';
import { GitHubIcon} from '../components/icons'

const About = () => {
    
    return ( 
        <Layout title="About" description="This is the About page" >
            <div className="text-center mt-5">
                <h1>Event</h1>

                <a className="btn btn-primary" href="https://github.com/AlexSegen/react-shopping-cart">
                    <GitHubIcon width={"18px"}/> <span className="ml-2 mr-4">Coupon</span></a>
            </div>
        </Layout>
     );
}
 
export default About;