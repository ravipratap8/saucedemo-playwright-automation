import { Page, expect, Locator } from '@playwright/test';

export class CartPage {

  private page: Page;
  private cartItems: Locator;
  private checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
  }

  async verifyCartPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/cart/);
    await expect(this.cartItems.first()).toBeVisible();
  }

  async verifyTwoItemsInCart(): Promise<void> {
    await expect(this.cartItems).toHaveCount(2);
  }

  async clickCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }

}