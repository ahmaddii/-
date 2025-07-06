// Object De Structuring

const course = {
    courseName:  "Js with Ahmad",
    price: "999",
    courseInstructer: "Ahmad"          
}
//course.courseInstructer 1st method

 const {courseInstructer: Instructer} = course;
 //console.log(courseInstructer);
 console.log(Instructer) ; // yahan pe hamne courseInstructer ko de strucer kiya
 
 // React Props by Default nhi krte de structure krte hain
 //const navBar = ({company}) =>{
   

 //}

 //navBar(company = "ahmad")

// API Json 

 {
    Name: "Ahmad";
    courseName: "Js in AHMAD";
    price: "free";
 }
// we can declear api by an array also
// [
  //  {

    //},

    //{

   // },

   // {

  // }
// ]