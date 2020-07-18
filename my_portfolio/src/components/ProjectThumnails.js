import React from 'react';
import RichText from './RichText.js'
import { uuid} from 'uuidv4'
import { SmallFlex,HeaderThree, BannerImage2} from '../Styles/type'
import Fade from 'react-reveal/Fade';

const ProjectThumbnails =(props)=>{
    return (
        
        <div >
        <Fade bottom>
        <HeaderThree>{props.project.fields.title}</HeaderThree>
        <BannerImage2><img  src={props.project.fields.thumbnail.fields.file.url}
        atl={props.project.fields.thumbnail.fields.title}/></BannerImage2>
        
        <div><RichText content={props.project.fields.description}/></div>
        {props.project.fields.technologies == true? <SmallFlex> {props.project.fields.technologies.map((name)=><div key={uuid()} >{name}</div>)} </SmallFlex> : '' }
        
        </Fade>
    </div>
    )
}
export default  ProjectThumbnails;