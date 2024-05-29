switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

//solution

To precisely match the functionality of switch, the if must use a strict comparison '==='.

For given strings though, a simple '==' works too.

if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}
Please note: the construct browser == 'Chrome' || browser == 'Firefox' … is split into multiple lines for better readability.

But the switch construct is still cleaner and more descriptive.

//task 2

  Rewrite the code below using a single switch statement:

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

//solution

The first two checks turn into two case. The third check is split into two cases:

let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}
Please note: the break at the bottom is not required. But we put it to make the code future-proof.

In the future, there is a chance that we’d want to add one more case, for example case 4. And if we forget to add a break before it, at the end of case 3, there will be an error. So that’s a kind of self-insurance.




















  
