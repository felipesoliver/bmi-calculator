export default function initCalculator() {
    
    const calculateBtn = document.querySelector('[data-calculate=""]');

    function calculateBmi(event) {
        event.preventDefault();
        const inputName = document.querySelector('[data-name=""]').value;
        const inputWeight = parseInt(document.querySelector('[data-weight=""]').value);
        const inputHeight = parseFloat(document.querySelector('[data-height=""]').value);
        const bmi = inputWeight / (inputHeight * inputHeight);
        const calculator = document.querySelector('[data-calculator=""]')
        const resultsContainer = document.querySelector('[data-results="container"]');
        const msgs = document.querySelector('[data-msgs=""]');

        if( bmi < 24 ) {

            resultsContainer.classList.add('active');
            setTimeout(() => {
                resultsContainer.classList.remove('active');
            },5000);
            msgs.innerHTML =`${inputName}, your BMI is ${parseInt(bmi)}, you're under weight!`;
        } else if( bmi >= 24 && bmi <= 26) {
            
            resultsContainer.classList.add('active');
            setTimeout(() => {
                resultsContainer.classList.remove('active');
            },5000);
            msgs.innerHTML =`${inputName}, your BMI is ${parseInt(bmi)}, you're ideal weight!`;
        } else if( bmi > 26 ) {

            resultsContainer.classList.add('active');
            setTimeout(() => {
                resultsContainer.classList.remove('active');
            },5000);
            msgs.innerHTML =`${inputName}, your BMI is ${parseInt(bmi)}, you're overweight!`;
        }

        
        if(inputName.length === 0 || inputHeight.length === 0 || inputWeight.length === 0) {
            
            calculator.classList.add('denied');
            resultsContainer.classList.add('active');
            msgs.innerHTML = 'Please, fill up all the fields';
            setTimeout(()=>{
                resultsContainer.classList.remove('active');
                calculator.classList.remove('denied');
            },3000);
        }
    }
    calculateBtn.addEventListener('click', calculateBmi);
}