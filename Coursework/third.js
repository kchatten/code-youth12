// Initialize variables //

// Holds the currently displayed value //
let displayCurrent = "0"
// Holds the result value //
let displayResult = "0"

// The functions for updating the currently displayed value //

function UpdateCurrent(value){

    // If the value currently displayed is 0, or already equal to the result. Set the display to the value.
    if (displayCurrent == 0 || displayResult)
    {
        displayCurrent = value;
    }
    // Otherwise add the value to the displayed value.
    else{
        displayCurrent += value;
    }

    // Update the displayed value
    UpdateDisplay();
}

function UpdateDisplay(){

    // Grab and define the element to udpate.
    const displayElement = document.getElementsByClassName('displayText');
    // Set the text content of that element to the currently displayed value
    displayElement.textContent = displayCurrent;

}

// The function for calculating and updating the result.

function CalculateResult(){

    // Create a variable to store the result of the calculation and set it to the evaluated result of the current display.

    const result = eval(displayCurrent);

    displayCurrent += "\n" + result.ToString();
    
    UpdateDisplay();
}

// Too tired, brain too mush to continue.

// TODO: Add event listeners.

// TODO: Add a clear and erase last input functions.

// Functionally each button adds its input to the end of the value which then becomes the equation. 

// Pressing the '4' button while '1' is displayed adds it to the end of the displayed value. This changes the display from '1' to '14'
// Further pressing the '-' operator button changes the display from '14' to '14-'
// Further pressing the '8' button changes the display from '14-' to '14-8'
// Further pressing the '=' operator button submits the displayed value to be interpreted as a mathematical equation by the eval() function.
//    and updates the display to the result of that equation.
