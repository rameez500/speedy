var Human = (function(){
  function Human(first,last,age){
  this.first = first;
  this.last = last;
  this.age = age;
  this.fullname = this.first + ' ' + this.last;

  }
  Human.prototype = {
    toString: function(){
      return 'Human: ' + this.fullname + 'is ' + this.age + ' year old.';
    }
  };
  return Human
}());
