/* 
    # 3. Calculate CTC with a Bonus 

    CTC stands for Cost to Company, representing the total annual amount an employer spends on an employee. 
    It is not the same as your take-home pay, because it includes extra benefits and taxes. 

    Key Components of CTC

    * Basic Salary: The fixed base amount paid to you before any extras.
    * Allowances: Extra money for housing (HRA), travel, or medical costs.
    * Benefits & Perks: Insurance, retirement funds, bonuses, or food paid by the employer.
    * 
        Let's calculate how much you earn from your office.

        You get 12,300 rupees as your monthly salary.
        You get a 20% bonus on your annual salary.
        How much money do you make per annum as a CTC?
*/

let monthlySalary = 12300;
let bonus = monthlySalary * 0.2;
let annualSalary = (monthlySalary + bonus) * 12;

console.log(`The annual salary its: ${annualSalary}.`);