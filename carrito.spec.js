const { test, expect } = require('@playwright/test');

test('Agregar dos productos, eliminar uno y verificar contador en 1', async ({ page }) => {
  // 1. Iniciar sesión
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 2. Agregar dos productos distintos al carrito
  const botonesAgregar = page.locator('.btn_inventory');
  await botonesAgregar.nth(0).click(); // Primer producto
  await botonesAgregar.nth(1).click(); // Segundo producto

  // 3. Ir a la página del carrito
  await page.click('.shopping_cart_link');

  // 4. Eliminar un producto desde la vista del carrito
  const botonesRemove = page.locator('.cart_button');
  await botonesRemove.nth(0).click(); // Elimina el primero de la lista

  // 5. Verificar que el contador del carrito quede en 1
  const contador = page.locator('.shopping_cart_badge');
  await expect(contador).toHaveText('1');
});