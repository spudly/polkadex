import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('/search');
  await expect(page.getByRole('progressbar')).toBeAttached();
  await expect(page.getByRole('progressbar')).not.toBeAttached();
});

test('displays search results', async ({page}) => {
  await page.getByPlaceholder('Search').fill('pikachu');
  await page.waitForURL('**/search/pikachu');
  await expect(
    page.getByRole('img', {name: 'pikachu', exact: true})
  ).toBeVisible();

  await page.getByPlaceholder('Search').fill('bunnelby');
  await page.waitForURL('**/search/bunnelby');
  await expect(
    page.getByRole('img', {name: 'bunnelby', exact: true})
  ).toBeVisible();

  await page.getByRole('link', {name: 'pikachu', exact: true}).click();
  await page.waitForURL('**/search/pikachu');
  await expect(page.getByPlaceholder('Search')).toHaveValue('pikachu');
  await expect(
    page.getByRole('img', {name: 'pikachu', exact: true})
  ).toBeVisible();

  await page.getByRole('link', {name: 'bunnelby', exact: true}).click();
  await page.waitForURL('**/search/bunnelby');
  await expect(page.getByPlaceholder('Search')).toHaveValue('bunnelby');
  await expect(
    page.getByRole('img', {name: 'bunnelby', exact: true})
  ).toBeVisible();

  await page.getByRole('img', {name: 'bunnelby', exact: true}).click();
  await page.waitForURL('**/pokemon/bunnelby');

  await expect(page.getByRole('heading', {name: 'bunnelby'})).toBeVisible();
});
