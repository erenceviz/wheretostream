import { test, expect } from '@playwright/test';
// das ist eine mögliche user experience, die mit codegen aufgenommen wurde. dabei wurden die funktionalitäten der website nacheinander getestet

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').fill('oppenheimer');
  await page.getByRole('link', { name: 'Oppenheimer', exact: true }).click();
  await page.locator('[id="__next"] path').click();
  await page.getByRole('button', { name: 'Make a list!' }).click();
  await page.getByRole('button', { name: 'TV Shows' }).click();
  await page.getByRole('button', { name: 'Type' }).click();
  await page.getByRole('menuitem', { name: 'Movies & TV Shows' }).click();
  await page.getByRole('button', { name: 'Movies & TV Shows' }).click();
  await page.getByRole('menuitem', { name: 'Movies', exact: true }).click();
  await page.getByRole('link', { name: 'The Beekeeper The Beekeeper' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.locator('div').filter({ hasText: /^Disney Plus$/ }).getByRole('link').click();
  const page3 = await page3Promise;
  await page.getByRole('button', { name: 'Make a list!' }).click();
  await page.getByRole('button', { name: 'Clear List' }).click();
  await page.getByRole('link', { name: 'Cliffhanger Cliffhanger' }).click();
});