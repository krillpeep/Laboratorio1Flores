/*
Feature: Checkout de compra en SauceDemo

  Scenario: Finalizar compra exitosamente con datos válidos
    Given que el usuario "standard_user" ha iniciado sesión
    And tiene al menos un producto en el carrito
    When ingresa a la vista del carrito de compras
    And presiona el botón de Checkout
    And completa su nombre, apellido y código postal
    And confirma la compra
    Then debe ver el mensaje de confirmación "Thank you for your order!"
*/

const { test, expect } = require('@playwright/test');

test.describe('Prueba de Aceptación - Flujo de Checkout', () => {
  test('Completar compra y verificar mensaje de agradecimiento', async ({ page }) => {
    // 1. Login y agregar producto
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('.btn_inventory');

    // 2. Ir al carrito e iniciar Checkout
    await page.click('.shopping_cart_link');
    await page.click('#checkout');

    // 3. Completar formulario de envío
    await page.fill('#first-name', 'Carlos');
    await page.fill('#last-name', 'Pérez');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');

    // 4. Finalizar compra
    await page.click('#finish');

    // 5. Verificar mensaje de éxito
    const mensajeExito = page.locator('.complete-header');
    await expect(mensajeExito).toHaveText('Thank you for your order!');
  });
});