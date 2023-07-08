import {expect, test} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('/pokemon/pikachu');
  await expect(page.getByRole('progressbar')).toBeAttached();
  await expect(page.getByRole('progressbar')).not.toBeAttached();
});

test('displays pokemon name heading', async ({page}) => {
  await expect(page.getByRole('heading', {name: 'pikachu'})).toBeVisible();
});

test('displays pokemon abilities', async ({page}) => {
  expect(
    (
      await page
        .getByRole('region', {name: 'abilities'})
        .getByRole('listitem')
        .all()
    ).length
  ).toBeGreaterThan(0);
});

test('displays pokemon moves', async ({page}) => {
  expect(
    (
      await page
        .getByRole('region', {name: 'moves'})
        .getByRole('listitem')
        .all()
    ).length
  ).toBeGreaterThan(0);
});

test('displays pokemon species', async ({page}) => {
  await expect(page.getByRole('region', {name: 'species'})).toHaveText(
    /pikachu/
  );
});

test('displays pokemon sprites', async ({page}) => {
  expect(
    (await page.getByRole('region', {name: 'sprites'}).getByRole('img').all())
      .length
  ).toBeGreaterThan(0);
});

test('displays pokemon types', async ({page}) => {
  expect(
    (
      await page
        .getByRole('region', {name: 'types'})
        .getByRole('listitem')
        .all()
    ).length
  ).toBeGreaterThan(0);
});

test('displays pokemon evolution chain', async ({page}) => {
  expect(
    (
      await page
        .getByRole('region', {name: 'evolution-chain'})
        .getByRole('link')
        .all()
    ).length
  ).toBeGreaterThan(0);
});
