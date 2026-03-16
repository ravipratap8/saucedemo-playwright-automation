import { Page, expect, Locator } from '@playwright/test';

export class CheckoutPage {

  private page: Page;
  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private postalCodeInput: Locator;
  private continueButton: Locator;
  private finishButton: Locator;
  private completeHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.completeHeader = page.locator('.complete-header');
  }

  async verifyCheckoutInformationPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-step-one/);
    await expect(this.firstNameInput).toBeVisible();
  }

  async fillCheckoutInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async clickContinue(): Promise<void> {
    await this.continueButton.click();
  }

  async verifyCheckoutOverviewPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-step-two/);
    await expect(this.finishButton).toBeVisible();
  }

  async clickFinish(): Promise<void> {
    await this.finishButton.click();
  }

  async verifyOrderCompleted(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-complete/);
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }

}