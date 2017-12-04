var AssyncQueue = function () {

  var _list = [], _index = 0, _length = 0;

  var _callback = function () {
    _list.shift();
    if (_list.length > 0) {
      _index++;
      _list[0](_callback);
    }
  };

  this.getPercentage = function () {
    return Math.ceil((_index / _length) * 100);
  };

  this.getIndex = function () {
    return _index;
  };

  this.getLength = function () {
    return _length;
  };

  this.next = function (func) {
    _list.push(func);
  };

  this.run = function () {
    if (_list.length > 0) {
      _index = 1;
      _length = _list.length;
      _list[0](_callback);
    }
  };
};
