import React, { useState } from "react";

function CoursePlayerPage(){

  const [progress,setProgress] = useState(0);

  const updateProgress = (e) => {

    const video = e.target;

    const percent = (video.currentTime / video.duration) * 100;

    setProgress(percent);

  };

  return(

    <div className="container mt-4">

      <h2>Course Video</h2>

      <video
        width="100%"
        controls
        onTimeUpdate={updateProgress}
      >
        <source src="/videos/react-course.mp4" type="video/mp4"/>
      </video>

      <div className="progress mt-3">

        <div
          className="progress-bar"
          style={{width: progress + "%"}}
        >
          {Math.floor(progress)}%
        </div>

      </div>

    </div>
  );
}



export default CoursePlayerPage;