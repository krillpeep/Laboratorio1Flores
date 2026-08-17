const { test, expect } = require('@playwright/test');

test('Prueba de integración: Verificar comentarios asociados al Post 1', async ({ request }) => {
  // 1. Obtener el post con id 1
  const responsePost = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(responsePost.status()).toBe(200);
  const post = await responsePost.json();
  expect(post.id).toBe(1);

  // 2. Obtener los comentarios del post 1
  const responseComments = await request.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  expect(responseComments.status()).toBe(200);
  const comments = await responseComments.json();

  // 3. Verificar que TODOS los comentarios pertenezcan al postId 1
  const todosSonDelPost1 = comments.every(comment => comment.postId === 1);
  expect(todosSonDelPost1).toBe(true);
});