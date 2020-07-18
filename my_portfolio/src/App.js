import React, { useState, useEffect } from 'react';
import Layout from './Queries/layout.js'
import './App.css';
import HomepageSections from './components/HomepageSections.js'
import {getContentfulNav} from './Queries/index.js'
import * as headings from './Styles/type.js'
import Footer from './components/Footer.js'
import Fade from 'react-reveal/Fade';
import {LayoutBody} from './Styles/layout'





function App() {
  let [data, setData] = useState({});
  
  const getData = async ()=>{
    const theData = await getContentfulNav();
    setData(theData);
  }



  useEffect(()=>{
    getData()
  },[])


  console.log(data)
  
  if(data.fields){
    return(
      <LayoutBody>
        <Layout>
        
          <Fade  bottom duration={3000} >
            <headings.HeaderOne larger>
              {data.fields.websiteTitle}
                <Fade delay={2000} bottom >
                  <headings.title ><h2>Software Developer</h2></headings.title>
                </Fade>
            </headings.HeaderOne>
          </Fade> 

          <Fade bottom>
          <headings.HeaderTwo larger>{data.fields.websiteSubtitle}</headings.HeaderTwo>
          </Fade>

          <Fade  bottom  >
          <HomepageSections/>
          </Fade>

          <Fade  bottom  >
          <headings.BannerImage>
            <img src={data.fields.bannerImage.fields.file.url} alt={data.fields.bannerImage.fields.title}/>
          </headings.BannerImage>
          </Fade>

        <Fade  bottom  >
        <Footer data={data}/>
        </Fade>
            
        </Layout>
        </LayoutBody>
     
   
    )
  }
  return <div>...loading</div>

}
export default App;