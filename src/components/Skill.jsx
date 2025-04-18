import React from "react";

const Skill = () => {
  return (
    <div>
      <h1 className="text-[#FFBD39] text-center text-4xl">My Skill</h1>
      <div className="skillContainer">
      <div>
        <div className="skill">
          <label htmlFor="HTML5" className="label">HTML5</label>
          <h3 className="text-white text-right">90%</h3>
          <div className="progreess">
            <div className="progreesLine"></div>
          </div>
        </div>
        <div className="skill">
          <label htmlFor="CSS3" className="label">CSS3</label>
          <h3 className="text-white text-right">85%</h3>
          <div className="progreess"> 
            <div className="progreesLine1"></div>
          </div>
        </div>
        <div className="skill">
          <label htmlFor="Javascript" className="label">Javascript</label>
          <h3 className="text-white text-right">85%</h3>
          <div className="progreess"> 
            <div className="progreesLine2"></div>
          </div>
        </div>
        <div className="skill">
          <label htmlFor="React" className="label">React</label>
          <h3 className="text-white text-right">90%</h3>
          <div className="progreess"> 
            <div className="progreesLine3"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="skill">
          <label htmlFor="Angular" className="label">Angular</label>
          <h3 className="text-white text-right">75%</h3>
          <div className="progreess"> 
            <div className="progreesLine4"></div>
          </div>
        </div>
        <div className="skill">
          <label htmlFor="Mongodb" className="label">Mongodb</label>
          <h3 className="text-white text-right">85%</h3>
          <div className="progreess"> 
            <div className="progreesLine5"></div>
          </div>
        </div>
        <div className="skill">
          <label htmlFor="MySQL" className="label">MySQL</label>
          <h3 className="text-white text-right">55%</h3>
          <div className="progreess"> 
            <div className="progreesLine6"></div>
          </div>
        </div>
        <div className="skill">
          <label htmlFor="Node.js" className="label">Node.js</label>
          <h3 className="text-white text-right">70%</h3>
          <div className="progreess"> 
            <div className="progreesLine7"></div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skill;
