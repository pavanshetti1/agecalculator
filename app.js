const btn = document.querySelector("button");
const inputDate = document.querySelector("input");
const resText = document.querySelector(".res-text");

btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    let dob = inputDate.value;

    if(dob == ""){
        alert("Enter your birthday");
    }
    else{
        const age = getAge(dob);
        resText.innerText = `YOUR AGE IS : ${age} YEARS`;
    }    
});

function getAge(dob){
    const currDate = new Date();
    const dateOfBirth = new Date(dob);

    let age;
    age = currDate.getFullYear() - dateOfBirth.getFullYear();
    const month = currDate.getMonth() - dateOfBirth.getMonth();

    
    if(month < 0 || ( month === 0 && currDate.getDate() < dateOfBirth.getDate()) ){
        age--;
    }
    return age;
}