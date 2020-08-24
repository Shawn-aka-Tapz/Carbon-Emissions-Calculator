let selection = document.getElementById('dropdown'); //making the variables for the stuff
let button = document.getElementById('but');
let fuel = document.getElementById('fuel');
let transport = document.getElementById('transport');
var test = 0;

selection.addEventListener('change', () => {//event listener for the extra options
    let sel = selection.options[selection.selectedIndex].value;
    if (sel === "drive") {
        document.getElementById('ifdrive').style.display = 'block';

    }
    if (sel !== 'drive') {
        document.getElementById('ifdrive').style.display = 'none';
    }
})

function buttonPress() {//check for button press
    calculateCarbon();
    calculateTrees();
}

function calculateCarbon() {
    let sel = selection.options[selection.selectedIndex].value;//get value in the dropdown menu
    var p1 = document.getElementById("number").value; //value in the text field
    let fu = fuel.value;//value in the dropdown menu for fuel
    let trans = transport.value;//get value in drop down menu for transport
    if (sel === "walk") {
        test = 0;
        document.getElementById('green').style.display = 'block';
        document.getElementById('yellow').style.display = 'none';
        document.getElementById('red').style.display = 'none';
    }
    else if (sel === 'cycle') {
        test = 0;
        document.getElementById('green').style.display = 'block';
        document.getElementById('yellow').style.display = 'none';
        document.getElementById('red').style.display = 'none';
    }
    else if (sel === 'transit') {
        test = (p1 * 67);
        if (test <= 400) {
            document.getElementById('green').style.display = 'block';
            document.getElementById('yellow').style.display = 'none';
            document.getElementById('red').style.display = 'none';
        }
        else if (test > 400 && test <= 2500) {
            document.getElementById('yellow').style.display = 'block';
            document.getElementById('green').style.display = 'none';
            document.getElementById('red').style.display = 'none';
        }
        else if (test > 2500) {
            document.getElementById('red').style.display = 'block';
            document.getElementById('green').style.display = 'none';
            document.getElementById('yellow').style.display = 'none';
        }
    }
    else {
        if (fu === 'gas') {//if its gas
            test = p1*133;
            if (test <= 400) {
                document.getElementById('green').style.display = 'block';
                document.getElementById('yellow').style.display = 'none';
                document.getElementById('red').style.display = 'none';
            }
            else if (test > 400 && test <= 2500) {
                document.getElementById('yellow').style.display = 'block';
                document.getElementById('green').style.display = 'none';
                document.getElementById('red').style.display = 'none';
            }
            else if (test > 2500) {
                document.getElementById('red').style.display = 'block';
                document.getElementById('green').style.display = 'none';
                document.getElementById('yellow').style.display = 'none';
            }
        }
        else if (fu === 'diesel'){
            test = p1*143;
            if (test <= 400) {
                document.getElementById('green').style.display = 'block';
                document.getElementById('yellow').style.display = 'none';
                document.getElementById('red').style.display = 'none';
            }
            else if (test > 400 && test <= 2500) {
                document.getElementById('yellow').style.display = 'block';
                document.getElementById('green').style.display = 'none';
                document.getElementById('red').style.display = 'none';
            }
            else if (test > 2500) {
                document.getElementById('red').style.display = 'block';
                document.getElementById('green').style.display = 'none';
                document.getElementById('yellow').style.display = 'none';
            }
        }
    }
    document.getElementById("demo").innerHTML = test;
    /*if (test<=400){
        document.getElementById('green').style.display='block';
       }s
       else if (test > 400) or (test < 1500){
        document.getElementById('yellow').style.display='block';
       }*/

}
function calculateTrees() {
    var trees = Math.floor(test / 36);
    document.getElementById("treenum").innerHTML = trees;
}





