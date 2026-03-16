# SauceDemo Playwright Automation

This small project contains an automated test for the SauceDemo website using Playwright with TypeScript.

The goal of this exercise is simple – automate the purchase flow for the first two items on the website and show a clean automation structure.

## What the Test Does

The automated test covers the complete purchase journey:

1. Opens the SauceDemo login page  
2. Logs in using the test credentials provided on the site  
3. Verifies that the inventory page loads correctly  
4. Adds the first two available items to the cart  
5. Confirms that the cart shows two items  
6. Opens the cart and validates both items are present  
7. Proceeds to the checkout process  
8. Enters user information  
9. Continues to the order overview page  
10. Completes the purchase  
11. Verifies that the order confirmation message appears  

The test ensures the end-to-end purchase flow works from login until the final confirmation page.

## Tools Used

- Playwright  
- TypeScript  
- Node.js  

I chose Playwright because it provides reliable browser automation, built-in assertions, and good reporting capabilities.

## Project Structure

The project is intentionally kept simple and organised using the Page Object Model.
pages/ -> page classes for login, inventory, cart and checkout
tests/ -> main test scenario
utils/ -> test data used during execution

Separating page logic from the test flow keeps the test readable and easier to maintain.

## How to Run the Test

Install dependencies:
npm install
Run the test:

npx playwright test

Run with visible browser:
npx playwright test --headed

Open the Playwright HTML report:
npx playwright show-report

## Final Note

This solution focuses on clean structure, readability, and good automation practices rather than adding unnecessary complexity for a single scenario.