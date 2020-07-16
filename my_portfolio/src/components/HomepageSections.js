import React, { useState, useEffect } from 'react';
import {getContentfulHomepage} from '../Queries/index.js'
import RichText from './RichText.js'
import ProjectThumbnails from './ProjectThumnails.js'
import {GridContainer, PullQuote,Section} from '../Styles/layout'
import {HeaderTwo,BodyText} from '../Styles/type'
import { uuid} from 'uuidv4'


const HomepageSections =()=>{
    const [data,setData]=useState({});

    const getData = async ()=>{
        const theData = await getContentfulHomepage();
        setData(theData);
    }
    useEffect(()=>{
        getData();
    },[]);
    console.log(data)
    if(Object.entries(data).length>0){
        return (
            <main>
                {data.fields.homepageSection.map((section)=>{
                    const {sectionTitle , textContent, projects }= section.fields;
                    return(
                        <Section key={uuid()}>
                            <HeaderTwo align="center" > {sectionTitle} </HeaderTwo>
                                <BodyText>
                               {textContent && <RichText content= {textContent}/> } 
                               </BodyText>
                                {projects && 
                                    <GridContainer>
                                        {projects.map((project,i)=>{
                                            return <ProjectThumbnails key={uuid()} project={project}/>
                                        })}
                                    </GridContainer>
                                }
                        </Section>
                    )
                })}
                <PullQuote>
                    <RichText content ={data.fields.puilQuote}/>
                </PullQuote>
            </main>
        )
    }
    return <div>loading</div>
}


export default HomepageSections;