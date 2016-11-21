//
// # Scripts for alexq.in
//

var password = 'fight';
var keys = '';
document.addEventListener('keydown', onKeyDown);

function onKeyDown (event) {
  keys += event.key;

  checkPassword();
}

function checkPassword () {
  if (keys === password) {
    document.querySelectorAll('.new-leaders').forEach(function (el) {
      el.classList.add('blink');
    });
  }
}
