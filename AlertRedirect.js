 function override_alert() {
        window.alert = function alert(msg) {
            console.log('Hidden Alert ' + msg);
        };
    }

var script = document.createElement('script');
script.appendChild(document.createTextNode('(' + override_alert + ')();'));
document.documentElement.appendChild(script);



// window.alert = function alert(msg) {
//             console.log('Hidden Alert ' + msg);
//         };
// window.alert(2222)