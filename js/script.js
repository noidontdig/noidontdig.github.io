//
// # Scripts for alexq.in
//

var password = 'fight trump';
var keys = '';
document.addEventListener('keydown', onKeyDown);

function onKeyDown (event) {
  keys += event.key;

  checkPassword();
}

function checkPassword () {
  if (keys === password) {
    document.querySelector('body').className = 'new leaders';
  }
}
