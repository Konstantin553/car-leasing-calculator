### Approach

1. **Event Listener Setup**:
    - Add event listeners to input elements (car value, down payment, lease period, and car type) to trigger calculations whenever the user makes changes.
2. **Retrieve User Inputs**:
    - Capture the car value, down payment percentage, lease period, and car type from the input fields.
3. **Determine Interest Rate**:
    - Based on the selected car type, assign the appropriate annual interest rate (2.99% for new cars and 3.7% for used cars).
4. **Calculate Monthly Lease Payment**:
    - Convert the annual interest rate to a monthly rate.
    - Calculate the amount financed (car value minus the down payment).
    - Use the annuity formula to compute the monthly lease payment.
5. **Update Display**:
    - Format and display the calculated results (monthly lease payment, down payment amount, and interest rate) in the output elements.
    
    ### Explanation:
    
    1. **HTML**: The HTML file provides the structure of the web page, including form inputs and a section to display the results.
    2. **CSS**: The CSS file styles the form and the results to ensure a clean, professional look. It also includes responsive design to adapt the layout for different screen sizes.
    3. **JavaScript**: The JavaScript file contains the logic for capturing user input, validating the values, calculating the leasing costs, and updating the results dynamically without needing a button click. It handles:
        - Synchronizing the values of the text and range inputs.
        - Calculating the down payment, monthly installment, and leasing cost based on the given business rules.
        - Displaying the results in real-time as the user adjusts the inputs.