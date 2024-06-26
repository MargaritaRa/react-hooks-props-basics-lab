import React from "react";
import user, {bio, links} from "../data/user";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
        <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <About links={user.links} />
    </div>
  );
}

export default About;
