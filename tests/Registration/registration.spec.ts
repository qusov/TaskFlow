import { expect, test } from '@playwright/test';

test('Registration', async ({page}) => {
    await page.goto('https://dmtryusov.ru/');
    await page.getByRole('link', {name: "Начать бесплатно"}).click();
    await expect(page).toHaveURL('https://dmtryusov.ru/register.html');
    await expect(page.getByPlaceholder('you@example.com')).toBeVisible();
    await page.waitForTimeout(1000);
});