import React from "react";
import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {

  const navigate = useNavigate();

  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">

        <img
          src={course.image}
          className="card-img-top p-3"
          alt={course.title}
          style={{ height: "180px", objectFit: "contain" }}
        />

        <div className="card-body">

          <h5>{course.title}</h5>

          <p>
            Instructor: {course.instructor}
          </p>

          <button
            className="btn btn-primary"
            onClick={() => navigate(`/course/${course.id}`)}
          >
            View Course
          </button>

        </div>

      </div>
    </div>
  );
}

export default CourseCard;