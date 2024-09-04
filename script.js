function Input_data() {
    calc();
}

function calc() {
    let total_cgpa = 0;
    let total_credit = 0;

    for (let i = 1; i <= coursenum; i++) {
        const grade = document.getElementById(`grade${i}`).value;
        const cred = parseInt(document.getElementById(`credit${i}`).value);

        if (grade === 'NA') {
            alert(`Please fill in the grade for course ${i}`);
            return false;
        } else if (cred === 0) {
            alert(`Please enter the credit for course ${i}`);
            return false;
        }

        total_cgpa += parseInt(grade) * cred;
        total_credit += cred;
    }
    
    const cgpa = total_cgpa / total_credit;

    document.getElementById('result').innerHTML = "Your CGPA is:" + cgpa.toFixed(2);
    
}

let coursenum = 1
function addCourse() {
    if (coursenum >= 10) {
        alert("Please fill up to 10 subjects!");
        return;
    }
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

function subCourse(){
    if (coursenum>1){
        const last = document.getElementById(`course${coursenum}`)
        last.remove()
        coursenum--;
    }
}


document.addEventListener('keydown', event => {
    const key = event.key;

    if (key === 'Enter') { 
        Input_data();
    } 
    
    else if (key === 'Backspace') {
        subCourse();
    }

    else if (key === 'ArrowDown') {
        addCourse();
    }

});