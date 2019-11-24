import React , {Component} from 'react';
import {Grid , Cell} from 'react-mdl';
class Landind extends Component{
    render() {
        return (
            <div style={{width: '100%' , margin: 'auto'}}>
                <Grid className= "landing-grid">
                    <Cell col = {12}>
                        <img src='https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg'
                       
                        alt= "avatat"
                        className ="avatar-img">

                        </img>
                        <div className= "banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Boostrap | JavaScript | Java | React | NodeJS</p>
                        <div className = "social-links">
                            {/* facebook */ }
                            <a href = "https://www.facebook.com/panuwat.khriudomza" rel="noopener noreferrer" target="_blank">
                                <i className = "fa fa-facebook-square" aria-hidden = "true"/>
                            </a>
                            {/* Github */ }
                            <a href = "https://github.com" rel="noopener noreferrer" target="_blank">
                                <i className = "fa fa-github-square" aria-hidden = "true"/>
                            </a>
                            {/* youtube */ }
                            <a href = "https://www.youtube.com/channel/UC0MTlQ6vyX_sYREXO59Hfcg" rel="noopener noreferrer" target="_blank">
                                <i className = "fa fa-youtube-square" aria-hidden = "true"/>
                            </a>
                           
                        </div>
                        
                        </div>
                    </Cell>
                </Grid>
              
            </div>
        )
    }
}

export default Landind;