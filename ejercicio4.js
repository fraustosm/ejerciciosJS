//Solución ejercicio 4

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

// Filtrar los cursos comunes
let commonCourses = student1Courses.filter(course => student2Courses.includes(course));

if (commonCourses.length > 0) {
    console.log("Los cursos comunes son:");
    commonCourses.forEach(course => {
        console.log(course);
    });
} else {
    console.log("No hay cursos comunes.");
}
