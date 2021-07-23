window.onscroll = function() {
    var theta = document.documentElement.scrollTop / 500 % Math.PI;

document.getElementById('plate').style.transform ='rotate(' + theta + 'rad)';
}
