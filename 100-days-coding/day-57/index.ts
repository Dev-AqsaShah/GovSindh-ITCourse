5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false


// part-2

// Yes, it will.

// Any string except an empty one (and "0" is not empty) becomes true in the logical context.

// We can run and check:

if ("0") {
  alert( 'Hello' );
}
