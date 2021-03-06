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
                    <button type="button" onclick="callAPI('sunah,'lee')">Call API</button>

                    
            </div>
          

                        
           
        </Layout>
     );
}
 

// define the callAPI function that takes a first name and last name as parameters
var callAPI = (firstName,lastName)=>{
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"firstName":firstName,"lastName":lastName});
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://051b4wkc0j.execute-api.us-west-1.amazonaws.com/dev", requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}

export default About;