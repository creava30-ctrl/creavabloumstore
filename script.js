function goStore(){

if(typeof fbq !== "undefined"){

fbq('track','ViewContent');

fbq('track','InitiateCheckout');

}

setTimeout(function(){

window.open(
"https://payhip.com/creavabloum",
"_blank"
);

},150);

}
