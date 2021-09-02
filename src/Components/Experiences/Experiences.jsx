import React from "react";

export default function Experiences() {
    return (
        <div>
            <div>
                <h2>Experiences</h2>
                <p>
                    “Protons give an atom its identity, electrons its personality.”
                    - Bill Bryson, A short history of nearly everything
                </p>
            </div>
            <hr style={{color: "red"}}/>
            <div>
                <h3>Education</h3>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
                    <table>
                        <tbody>
                        <tr>
                            <th>Code Academy</th>
                            <th>Front End</th>
                        </tr>
                        <tr>
                            <td>2021</td>
                            <td style={{width: "400px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Accusamus corporis cum dolor doloribus eius libero, magni minima neque placeat quaerat
                                quos rerum saepe vitae? Labore minus nemo neque obcaecati perspiciatis!
                            </td>
                        </tr>
                        <tr>
                            <th>Vilnius Coding School</th>
                            <th>Full Stack</th>
                        </tr>
                        <tr>
                            <td>2020</td>
                            <td>Full acquaintance with websites, structures. Programming languages like javascript, php.
                                Working with mysql database (phpmyadmin). HTML, CSS, CEO features.
                            </td>
                        </tr>
                        <tr>
                            <th>Zemaitijos college</th>
                            <th>Busness information systems</th>
                        </tr>
                        <tr>
                            <td>2006 - 2009</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis cum dolor
                                doloribus eius libero, magni minima neque placeat quaerat quos rerum saepe vitae? Labore
                                minus nemo neque obcaecati perspiciatis!
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h2>Abilities</h2>
                <p>“Life without knowledge is death in disguise.”
                    - Talib Kweli</p>
            </div>
            <hr style={{color: "blue"}}/>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
                <table>
                    <tbody>
                    <tr>
                        <th>Soft Skills</th>
                    </tr>
                    <tr>
                        <td style={{width: "400px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                            corporis cum dolor doloribus eius libero, magni minima neque placeat quaerat quos rerum
                            saepe vitae? Labore minus nemo neque obcaecati perspiciatis!
                        </td>
                    </tr>
                    <tr>
                        <th>Hard Skills</th>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis cum dolor
                            doloribus eius libero, magni minima neque placeat quaerat quos rerum saepe vitae? Labore
                            minus nemo neque obcaecati perspiciatis!
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <table>
                    <tbody>
                    <tr>
                        <th>Languages</th>
                    </tr>
                    <tr>
                        <td style={{width: "400px"}}>Lithuanian</td>
                    </tr>
                    <tr>
                        <td>English</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}