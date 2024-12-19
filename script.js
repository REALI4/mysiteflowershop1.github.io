document.addEventListener('DOMContentLoaded', function() {
    // Ждем полной загрузки контента страницы (когда HTML будет полностью загружен)
    
    // Находим все кнопки "Купить" на странице, которые имеют класс .add-to-cart
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    // Для каждой найденной кнопки добавляем обработчик события
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Когда кнопка нажата, извлекаем название и цену товара из атрибутов data-name и data-price
        const productName = button.getAttribute('data-name');
        const productPrice = button.getAttribute('data-price');
    
        // Получаем текущие элементы корзины из localStorage, или если корзина пуста, создаем новый массив
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        // Добавляем новый товар в корзину (массив)
        cartItems.push({ name: productName, price: productPrice });
        
        // Сохраняем обновленный массив корзины обратно в localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
        // Показать уведомление (alert), что товар добавлен в корзину
        alert(`${productName} добавлен в корзину`);
      });
    });
  });
  