function LE(){
  return this;
}
LE.prototype=Object.assign(LE.prototype,{
  get(){
    this = new URL();
    var loc = window.location.split("?").shift();
    var data = loc.split(",");
    for(var i = 0;i<data.length;i++){
      var variable = data[i].split(":");
      eval("function _gd(){return "+variable[1]+"}");
      this[variable[0]]=_gd();
    }
    return this;
  }
});
