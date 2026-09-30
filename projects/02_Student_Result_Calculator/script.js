function calculateResult() {

    // Get student name

    const studentName =
        document.getElementById("studentName").value;


    // Get marks

    const english =
        Number(document.getElementById("english").value);

    const maths =
        Number(document.getElementById("maths").value);

    const science =
        Number(document.getElementById("science").value);

    const computer =
        Number(document.getElementById("computer").value);

    const social =
        Number(document.getElementById("social").value);


    // Check whether all marks are entered

    if (
        studentName === "" ||
        english === 0 ||
        maths === 0 ||
        science === 0 ||
        computer === 0 ||
        social === 0
    ) {

        alert("Please enter all details.");

        return;
    }


    // Calculate total

    const total =
        english +
        maths +
        science +
        computer +
        social;


    // Calculate average

    const average = total / 5;


    // Calculate grade

    let grade;

    if (average >= 90) {

        grade = "A+";

    } else if (average >= 80) {

        grade = "A";

    } else if (average >= 70) {

        grade = "B";

    } else if (average >= 60) {

        grade = "C";

    } else if (average >= 50) {

        grade = "D";

    } else {

        grade = "F";
    }


    // Calculate pass/fail

    let status;

    if (
        english >= 35 &&
        maths >= 35 &&
        science >= 35 &&
        computer >= 35 &&
        social >= 35
    ) {

        status = "PASS";

    } else {

        status = "FAIL";
    }


    // Display result

    document.getElementById("studentResult").textContent =
        "Student: " + studentName;

    document.getElementById("total").textContent =
        "Total Marks: " + total + " / 500";

    document.getElementById("average").textContent =
        "Average: " + average.toFixed(2) + "%";

    document.getElementById("grade").textContent =
        "Grade: " + grade;

    document.getElementById("status").textContent =
        "Result: " + status;


    // Show result box

    document.getElementById("result").style.display = "block";
}