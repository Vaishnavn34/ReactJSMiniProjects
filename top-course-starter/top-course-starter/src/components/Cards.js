import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);


    function getCourses () {
        if(category ==="All"){
            let allCourses =[];
            Object.values(courses).forEach(array =>{
            array.forEach(courseData =>{
                allCourses.push(courseData);
            })
        })
        return allCourses;

        }
        else{
            // main sirf specific category ka data pass krunga
            return courses[category];
        }

        
    }

    return(

        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map( (course) =>(
                    <Card key={course.id} course={course} likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}/>
                ))
            }
        </div>
    )

    // retrurns you a list of all courses received from the api course
    

}
export default Cards;