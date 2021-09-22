import React from "react";
import './Github.css'

export default function GithubSection() {
    return (
        <div>
            <h3>Some Github projects</h3>
            <div className="github-wrapper">
                <div className="github-projects" onClick={()=> window.open("https://boring-pike-acba84.netlify.app", "_blank")}>
                    <h3>Vanilla JavaScript RPG game</h3>
                    <p>Technologies: JavaScript, HTML, CSS</p>
                    <div className="github-projects-img">
                        <img src="https://i.pinimg.com/originals/83/2d/4b/832d4b162272d7715da3754435d2cf39.jpg"/>
                    </div>
                </div>
                <div className="github-projects"  onClick={()=> window.open("http://www.autopirkimas1.lt", "_blank")}>
                    <h3>Wordpress DIVI .</h3>
                    <p>Technologies: Wordpress</p>
                    <div className="github-projects-img">
                        <img src="http://www.autopirkimas1.lt/wp-content/uploads/2021/06/car-dealer-35.jpg"/>
                    </div>
                </div>

                <div className="github-projects" onClick={()=> window.open("http://sesupesbaidares.lt", "_blank")}>
                    <h3>In progress...</h3>
                    <p>Technologies: JavaScript, HTML, CSS</p>
                    <div className="github-projects-img">
                        <img src="http://sesupesbaidares.lt/assets/1.jpg"/>
                    </div>
                </div>

                <div className="github-projects" onClick={()=> window.open("https://github.com/mantasKrincius/myCv-React", "_blank")}>
                    <h3>My CV :)</h3>
                    <p>Technologies: React</p>
                    <div className="github-projects-img">
                        <img
                            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                    </div>
                </div>
            </div>
        </div>
    )
}