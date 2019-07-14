document.addEventListener( 'DOMContentLoaded', () => {

  function divActiv( event ) {
    event.preventDefault();
    let height = window.innerHeight;
    floatDiv.forEach( (item) => {
      if ( item.getBoundingClientRect().top < window.innerHeight && item.getBoundingClientRect().bottom > 0) {
        item.classList.add( 'reveal_active' );
      } else {
        item.classList.remove( 'reveal_active' );
      }
    });
  }

  //Начальные установки
  let floatDiv = document.querySelectorAll( '.reveal' );

  floatDiv.forEach( (item) => {
    item.classList.remove( 'reveal_active' );
  });

  //Запуск кода
  document.addEventListener( 'scroll', divActiv );
});

// Попробовал использовать событие DOMContentLoaded, перенес <script> в начало <body>
// возник вопрос:
// Почему при добавлении атрибута <script async> код перестает работать?
