import React from 'react';
import RichText from './RichText.js'
import { uuid} from 'uuidv4'
import { SmallFlex,HeaderThree} from '../Styles/type'

const ProjectThumbnails =(props)=>{
    return (
        <div >
        <HeaderThree>{props.project.fields.title}</HeaderThree>
        <img src={props.project.fields.thumbnail.fields.file.url}
         atl={props.project.fields.thumbnail.fields.title}/>
        <div><RichText content={props.project.fields.description}/></div>
        <SmallFlex>
             {props.project.fields.technologies.map((name)=><div key={uuid()} >{name}</div>)}
        </SmallFlex>
    </div>
    )
}
export default  ProjectThumbnails;