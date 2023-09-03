import React from "react";
import '../ressources/styles/skills.css';

function SkillBox({type}) {

    console.log(type);
    return(
        <div className="box_content">
            <div className={"skills_list"}>
                {type.map((item, index) => {
                    return(
                        <a className="skill" key={index}>
                            <img src={item.image}/>
                            <div className="skill_name">
                                <p>{item.name}</p>
                            </div>
                        </a>

                    )
                })}
            </div>

        </div>
    );
}

export default SkillBox;