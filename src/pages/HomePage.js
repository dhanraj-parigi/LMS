import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import { getCourses } from "../services/courseService";

function HomePage() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(data => setCourses(data));
  }, []);

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-5">Courses</h1>

      <div className="row g-4">

        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}

      </div>

    </div>
  );
}

export default HomePage;