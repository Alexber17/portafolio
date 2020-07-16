import React, { useState, useEffect } from 'react';
import Layout from './Queries/layout.js'
import './App.css';
import HomepageSections from './components/HomepageSections.js'
import {getContentfulNav} from './Queries/index.js'
import * as headings from './Styles/type.js'
import Footer from './components/Footer.js'


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
      <Layout>
    
        <headings.HeaderOne>{data.fields.websiteTitle}</headings.HeaderOne>
        <headings.HeaderTwo larger>{data.fields.websiteSubtitle}</headings.HeaderTwo>
        <headings.BannerImage>
          <img src={data.fields.bannerImage.fields.file.url} alt={data.fields.bannerImage.fields.title}/>
        </headings.BannerImage>
        <HomepageSections/>


       <Footer data={data}/>
      </Layout>
    )
  }
  return <div>...loading</div>

}
export default App;