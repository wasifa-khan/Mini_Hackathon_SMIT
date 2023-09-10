// Sample functions for adding class details and student information
function addClassDetails() {
    const classTimings = document.getElementById("class-timings").value;
    const classSchedule = document.getElementById("class-schedule").value;
    const teacherName = document.getElementById("teacher-name").value;
    const sectionName = document.getElementById("section-name").value;
    const courseName = document.getElementById("course-name").value;
    const batchNumber = document.getElementById("batch-number").value;

    // Perform actions to add class details (e.g., send data to the server)
    // You can replace this with your actual logic

    // Clear the form fields after submission
    document.getElementById("class-form").reset();
}

function addStudentDetails() {
    const studentName = document.getElementById("student-name").value;
    const fatherName = document.getElementById("father-name").value;
    const rollNumber = document.getElementById("roll-number").value;
    const contactNumber = document.getElementById("contact-number").value;
    const cnicNumber = document.getElementById("cnic-number").value;
    const studentCourse = document.getElementById("student-course").value;

    // Perform actions to add student details (e.g., send data to the server)
    // You can replace this with your actual logic

    // Clear the form fields after submission
    document.getElementById("student-form").reset();
}
