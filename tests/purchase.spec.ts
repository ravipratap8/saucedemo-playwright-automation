import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { testData } from '../utils/testData';

test.describe('SauceDemo Purchase Flow', () => {

  test('User can complete purchase of the first two items', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Open login page
    await loginPage.goto();
    await loginPage.verifyLoginPageLoaded();

    // Login with valid credentials
    await loginPage.login(testData.username, testData.password);

    // Verify inventory page and add first two items
    await inventoryPage.verifyInventoryPageLoaded();
    await inventoryPage.addFirstTwoItemsToCart();
    await inventoryPage.verifyCartCount('2');

    // Open cart
    await inventoryPage.openCart();

    // Verify cart contents
    await cartPage.verifyCartPageLoaded();
    await cartPage.verifyTwoItemsInCart();
    await cartPage.clickCheckout();

    // Enter checkout details
    await checkoutPage.verifyCheckoutInformationPageLoaded();
    await checkoutPage.fillCheckoutInformation(
      testData.firstName,
      testData.lastName,
      testData.postalCode
    );

    await checkoutPage.clickContinue();

    // Complete purchase
    await checkoutPage.verifyCheckoutOverviewPageLoaded();
    await checkoutPage.clickFinish();

    // Verify order confirmation
    await checkoutPage.verifyOrderCompleted();
  });

});