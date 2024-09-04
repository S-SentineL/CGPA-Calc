function Input_data() {
    var grade = document.getElementById('grade1').value;
    var cred = parseInt(document.getElementById('credit1').value);

    if (grade == 0) {
        alert("Please fill the grade");
        return false;
    } else if ( cred == 0 ) {
        alert("Please enter the credit");
        return false;
    } else {
        calc(grade, cred);
    }
}

function calc(grade, cred) {
    let total_cgpa = 0;
    let total_credit = 0;

    for (let i = 1; i <= coursenum; i++) {
        if (grade == "10") {
            total_cgpa += 10 * cred;
        } else if (grade == "9") {
            total_cgpa += 9 * cred;
        } else if (grade == "8") {
            total_cgpa += 8 * cred;
        } else if (grade == "7") {
            total_cgpa += 7 * cred;
        } else if (grade == "6") {
            total_cgpa += 6 * cred;
        } else if (grade == "5") {
            total_cgpa += 5 * cred;
        } else {
            total_cgpa += 0;
        }
    }
    total_credit += cred;
    var cgpa = total_cgpa / total_credit;

    document.getElementById('result').innerHtml = "Your CGPA is:" + cgpa.toFixed(2);
    
}

let coursenum = 1
function addCourse() {
    coursenum++;
    const c1 = document.getElementById("course1");
    const newCourse = c1.cloneNode(true);
    newCourse.id = `course${coursenum}`;

    const cSel = newCourse.querySelector('.credit');
    const gSel = newCourse.querySelector('.grade');
    cSel.id = `credit${coursenum}`;
    gSel.id = `grade${coursenum}`;

    cSel.selectedIndex = 0;
    gSel.selectedIndex = 0;

    document.getElementById('Box1').appendChild(newCourse);
}