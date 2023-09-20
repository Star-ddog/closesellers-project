import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const Animation = (props) => {

    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);

  return (
    <div>
      <div
        data-aos={props.animation}
        style={{
          backgroundColor: props.color,
          width: "50%",
          height: "100px",
          margin: "300px auto 300px auto"
        }}
      ></div>
    </div>
  )
}

export default Animation