// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
var $zIndex = 1000;
$("navigation").childElements().each(function(item){
  item.observe('mouseover',function(){
    item.setStyle({zIndex: $zIndex++});
  });
  item.observe('click',function(){
    document.location = item.down('a').href
  })
});
