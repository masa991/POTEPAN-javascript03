$(function(){
  searchWord = function(){
    let inputText = $(this).val(),
        targetText;
    $('.picture-name').each(function() {
      targetText = $(this).text();
    
      if (targetText.indexOf(inputText) != -1){
        $(this).parents('.picture-list li').show();
      } else {
        $(this).parents('.picture-list li').hide();
      }
    });
  };
  $('#search-text').on('input', searchWord);
});
