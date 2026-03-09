import React from "react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      padding: "15px",
      transition: "0.3s",
      textAlign: "center"
    }}>

      <img
        src={course.image}
        alt={course.title}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "contain"
        }}
      />

      <h3>{course.title}</h3>

      <p>Instructor: {course.instructor}</p>

      <p>Duration: {course.duration}</p>

      <p>⭐⭐⭐⭐☆</p>

      <Link to={`/course/${course.id}`}>
        <button style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "8px 15px",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          View Course
        </button>
      </Link>

    </div>
  );
}

export default CourseCard;