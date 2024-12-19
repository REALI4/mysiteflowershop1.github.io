document.addEventListener('DOMContentLoaded', function() {
    // Находим контейнер для товаров в корзине и элемент для отображения общей суммы
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');
  
    // Загружаем товары из localStorage или создаём пустой массив, если корзина пуста
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Проверяем, есть ли товары в корзине
    if (cartItems.length === 0) {
      // Если корзина пуста, отображаем сообщение об этом
      cartItemsContainer.innerHTML = '<p>Ваша корзина пуста</p>';
    } else {
      // Если корзина не пуста, выводим товары
      cartItems.forEach(item => {
        // Для каждого товара создаём новый элемент с информацией о товаре
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <span>${item.name}</span>  <!-- Название товара -->
          <span>${item.price}тг</span>  <!-- Цена товара -->
        `;
        // Добавляем новый товар в контейнер корзины
        cartItemsContainer.appendChild(cartItem);
      });
  
      // Расчёт общей стоимости корзины
      const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
      // Отображаем общую сумму в элементе с классом .total-price
      totalPriceElement.textContent = totalPrice.toFixed(2) + 'тг';  // Форматируем сумму с двумя знаками после запятой
    }
  
    // Находим кнопку оформления заказа
    const checkoutButton = document.querySelector('.checkout');
    checkoutButton.addEventListener('click', () => {
      // При нажатии на кнопку показываем сообщение благодарности
      alert('Спасибо за покупку!');
      // Очищаем корзину в localStorage
      localStorage.removeItem('cartItems');
      // Перезагружаем страницу, чтобы обновить корзину
      location.reload();
    });
});
