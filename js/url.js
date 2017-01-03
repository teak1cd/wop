function get(){
  return new Object(JSON.parse( decodeURI(window.location.href.split("?")[1])));
}
function set(object){
  window.location = window.location.origin+""+window.location.pathname+"?"+JSON.stringify(object);
}
