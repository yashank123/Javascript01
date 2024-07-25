const course = {
    coursename: "javascript",
    Price: 100,
    courseMentor: "yashank"
}

console.log(course.courseMentor);

const{courseMentor: mentor} = course // destructuring
console.log(mentor);

const obj = {
    name: "abc"
}
//const{name: mentor} = obj; // dosent work , cant not redecleare mentor
console.log(mentor);