let tubercolosis = false;
let salaryInt;
let daysInt;
let compensationDays;
let employerDays;
let healthInsDays;
let dailyAllowance;
let employerPay;
let healthInsPay;

//Calculates and displays the ammount health insurance has to pay
function getHealthInsPay() {
    healthInsPay = dailyAllowance * healthInsDays;
    document.getElementById('health-insurance-pays').textContent = healthInsPay.toFixed(2) + '€';
    return healthInsPay;
}

//Calculates and displays the ammount employer has to pay
function getEmployerPay() {
    employerPay = dailyAllowance * employerDays;
    document.getElementById('employer-pays').textContent = employerPay.toFixed(2) + '€';
    return employerPay;
}

//Calculates daily allowance
function getDailyAllowance() {
    dailyAllowance = (salaryInt * 70 / 100) / 30;
    dailyAllowance = parseInt(dailyAllowance);
    return dailyAllowance;
}

//Displays daily allowances
function displayDailyAllowance() {
    let displayAllowance = document.getElementsByClassName('daily-allowance');
    for(i = 0; i < displayAllowance.length; i++) {
        displayAllowance[i].textContent = 'Daily allowance \r\n' + dailyAllowance.toFixed(2) +'€';
    }
}

//Displays totals
function displayTotals() {
    document.getElementById('total-days').textContent = 'Compensation total for ' 
    + compensationDays + ' days (net)';
    let totalPayout = document.getElementById('total-payout');
    let totalPayoutSum = employerPay + healthInsPay;
    totalPayout.textContent = totalPayoutSum.toFixed(2) + '€';
}
 
//Gets compensation days
function getCompensationDays() {
    let days = daysInt - 3;
    compensationDays = parseInt(days);
    return compensationDays;
}

//Gets user gross salary in form of a number
function getUserSalary() {
    let grossSalary = document.getElementById('gross-salary').value;
    salaryInt = parseInt(grossSalary);
    return salaryInt;
}

//Gets user sick-leave days in form of a number
function getUserDays() {
    let sickLeaveDays = document.getElementById('sick-leave-days').value;
    daysInt = parseInt(sickLeaveDays);
    return daysInt;
}

//Checks if user has tubercolosis
function isChecked() {
    if(document.getElementById('tubercolosis-checkbox').checked){
        tubercolosis = true;
    } else {
        tubercolosis = false;
    }
    return tubercolosis;
}

//Gets and displays days that employer has to pay
function getEmployerDays() {
    let days = 0;
    for(i = 1; i <= compensationDays; i++) {
        if(i <= 5) {
            days++;
        }
    }
    employerDays = parseInt(days);
    document.getElementById('employer-days').textContent = employerDays + ' days';
    return employerDays;
}

//Gets and displays days that health insurance has to pay
function getHealthInsDays() {
    let days = 0;
    for(i = 1; i <= compensationDays; i++) {
        if(i > 5) {
            days++;
        }
    }
    healthInsDays = parseInt(days);
    document.getElementById('health-insurance-days').textContent = healthInsDays + ' days';
    return healthInsDays;
}

//Gives alert depending on days entered
function limitDays() {
    if(tubercolosis === false && compensationDays >= 182) {
        alert('Max days allowed 182');
    } else if(tubercolosis === true && compensationDays >= 240) {
        alert('Max days allowed 240');
    }
}

//Gets user inputs and calculates
function calculate() {
    getUserDays();
    getUserSalary();
    getCompensationDays();
    getEmployerDays();
    getHealthInsDays();
    getDailyAllowance();
    getEmployerPay();
    getHealthInsPay();
    displayDailyAllowance();
    displayTotals();
    limitDays();
}