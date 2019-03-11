(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });

    $('.menu__links-item').on('click', function() {
      // do something

      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);


new Vue({
  el: '#vueApp',

  data: {
    total: 0,
    sold: false,
  products: [
    {title: 'Brended shoe', price: 300, image: 'img/hils.png', count: 2},
    {title: 'Brended shoe', price: 300, image: 'img/shirt3.png', count: 0},
    {title: 'Brended shoe', price: 300, image: 'img/shirt4.png', count: 2},
    {title: 'Brended shoe', price: 300, image: 'img/wallet.png', count: 2},
    {title: 'Brended shoe', price: 300, image: 'img/bag.png', count: 2},
    {title: 'Brended shoe', price: 300, image: 'img/pents.png', count: 2}
  ]
},
methods: {
  buy: function(product){
    if(product.count > 0){
      this.total += product.price;
    }

  }
}
})
