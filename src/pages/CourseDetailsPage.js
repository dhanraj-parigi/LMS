import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CourseDetailsPage() {

  const { id } = useParams();

  const [course,setCourse] = useState(null);
  const [progress,setProgress] = useState(0);

  useEffect(() => {

    fetch(`http://localhost:3001/courses/${id}`)
      .then(res => res.json())
      .then(data => setCourse(data));

    const savedProgress = localStorage.getItem("progress_" + id);

    if(savedProgress){
      setProgress(savedProgress);
    }

  },[id]);

  const markComplete = () => {

    const newProgress = 100;

    setProgress(newProgress);

    localStorage.setItem("progress_" + id,newProgress);

  };

  if(!course) return <h3>Loading...</h3>;

  return (

    <div className="container mt-5">

      <h2>{course.title}</h2>

      <p>{course.description}</p>

      <div className="ratio ratio-16x9 mb-4">

        <iframe
          src={course.video}
          title="Course Video"
          allowFullScreen
        ></iframe>

      </div>

      <h5>Progress</h5>

      <div className="progress mb-3">

        <div
          className="progress-bar"
          style={{ width: progress + "%" }}
        >
          {progress}%
        </div>

      </div>

      <button
        className="btn btn-success"
        onClick={markComplete}
      >
        Mark as Completed
      </button>

    </div>

  );
}

export default CourseDetailsPage;