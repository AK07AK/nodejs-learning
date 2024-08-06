const Joi = require('joi');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const courses = [
    {id:1,name:'cousre1'},
    {id:2,name:'cousre2'},
    {id:3,name:'course3'}
];

//CREATE

//creating new course 
app.post('/api/courses',(request,response)=>{
    const {error} = validateCourse(request.body);
    if(error)
    {
        return response.status(400).send('errors');
    }
    const course = {
        id:courses.length+1,
        name:request.body.name
    };
    courses.push(course);
    response.send(course);
    
});

//READ
//getting entire course details
app.get('/api/courses',(request,response)=>{
    response.send(courses);
});
//reading specific course
app.get('/api/courses/:id',(request,response)=>{
    const course = courses.find(c=>c.id === parseInt(request.params.id));
    if(!course)
        return response.status(404).send('No courses has been found with this id');
    response.send(course);
});


//UPDATE
//updating the course data
app.put('/api/courses/:id',(request,response)=>{
    const course = courses.find(c=>c.id === parseInt(request.params.id));
    if(!course)
        return response.status(404).send('No course with given id was found');
    const {error} = validateCourse(request.body);
    if(error)
        return response.status(400).send('errors');
    

    course.name = request.body.name;
    response.send(course);   

});

//DELETE
// Deleting the course

app.delete('/api/courses/:id',(request,response)=>{
    const course = courses.find(c=>c.id === parseInt(request.params.id));
    if(!course)
         return response.status(404).send("No courses found");
    const index = courses.indexOf(course);
    courses.splice(index,1);
    response.send(course);

})


app.listen(port,()=>{
    console.log(`Listening on port ${port}....`);
});

function validateCourse(course)
{
    const schema = Joi.object({
        name:Joi.string().min(3).required(),
    });
    return schema.validate(course);
}

