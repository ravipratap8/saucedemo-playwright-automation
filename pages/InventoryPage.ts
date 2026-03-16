import { Page, expect, Locator } from '@playwright/test';

export class InventoryPage {

  private page: Page;
  private inventoryItems: Locator;
  private addToCartButtons: Locator;
  private cartLink: Locator;
  private cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item');
    this.addToCartButtons = page.locator('button[data-test^="add-to-cart"]');
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async verifyInventoryPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.inventoryItems.first()).toBeVisible();
  }

  async addFirstTwoItemsToCart(): Promise<void> {
    await this.addToCartButtons.nth(0).click();
    await this.addToCartButtons.nth(1).click();
  }

  async verifyCartCount(count: string): Promise<void> {
    await expect(this.cartBadge).toHaveText(count);
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }

}