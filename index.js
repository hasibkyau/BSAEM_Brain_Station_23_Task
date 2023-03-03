$(document).ready(function(){
  
    $('[data-ic-class="toggle-button"]').click(function(){
      var selectedTab = $(this).index();
      
      $('[data-ic-class="toggle-button"]').removeClass('active');
      $(this).addClass('active');
      
      $('[data-ic-class="content"]').removeClass('active');
      $('[data-ic-class="content"]').eq(selectedTab).addClass('active');
      
    });
  });