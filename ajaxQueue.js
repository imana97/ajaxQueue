const AssyncQueue = function() {
  var _list = [];
  var _index = 0;
  var _length = 0;

  var _callback = function(params) {
    _list.shift();
    if (_list.length > 0) {
      _index++;
      _list[0](_callback, params);
    }
  };

  this.next = function(func) {
    _list.push(func);
  };

  this.run = function() {
    if (_list.length > 0) {
      _index = 1;
      _length = _list.length;
      _list[0](_callback);
    }
  };
};
