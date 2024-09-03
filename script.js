function Input_data() {
    var grade =document.getElementById('Box1').value;
    var cred = parseInt(document.getElementById('Box2').value);

    if (grade =="") {
        alert("Please fill the grade");
    return false;
        }else if(isNaN(cred)|| cred< 0||cred>4){
            alert("Please enter valid credit");
            return false;
        }else {
        calc(grade, cred);
    }
    }

    // function calc() {
    //     let totalCGPA = 0;
    //     let totalCredits = 0;
    
    //     for (let i = 1; i <= courseCount; i++) {
    //         const gradeValue = parseFloat(document.getElementById(`grade{i}`).value);
    //         const creditValue = parseFloat(document.getElementById(`credit{i}`).value);
    //  }
    // Try this... have not confirmed yet... use const to get id not var 

    // i removed <script> idk kyu
function calc(grade,cred) {  
    var total_cgpa = 0;
    var total_credit=0;

    if (grade == "S") {
        total_cgpa += 10 * cred;
    } else if (grade == "A") {
        total_cgpa += 9 * cred;
    } else if (grade == "B") {
        total_cgpa += 8 * cred;
    } else if (grade == "C") {
        total_cgpa += 7 * cred;
    } else if (grade == "D") {
        total_cgpa += 6 * cred;
    } else if (grade == "E") {
        total_cgpa += 5 * cred;
    } else {
        total_cgpa += 0;
    }

    total_credit += cred;
    var cgpa = total_cgpa / total_credit;
    
    document.getElementById('Box3').innerHtml = "Your CGPA is:"+cgpa.toFixed(2);
}