var cond1 = true;
var cond2 = false;
var cond3 = true;
var cond4 = true;
var cond5 = false;
var cond6 = true;

if (cond1 && !cond2) {
    console.log('branch1');
    if (cond3) {
        console.log('branch1.1');
        if (cond4 && !cond5) {
            console.log('branch1.1.1');
            if (cond6) {
                console.log('branch1.1.1.1');
            }
        } else {
            console.log('branch1.1.2');
        }
    } else {
        console.log('branch1.2');
    }
} else if (!cond1 && cond2) {
    console.log('branch2');
}

var branch1Func = function() {
    console.log('branch1');
};
var branch2Func = function() {
    console.log('branch2_func');
};
var branch11Func = function() {
    console.log('branch1_1_func');
};
var branch12Func = function() {
    console.log('branch1_2_func');
};
var branch111Func = function() {
    console.log('branch1_1_1_func');
};
var branch112Func = function() {
    console.log('branch1_1_2_func');
};
var branch1111Func = function() {
    console.log('branch1_1_1_1_func');
};

var handler = new LogicHandler(branch1Func,
    branch11Func,
    branch111Func,
    branch1111Func,
    branch112Func,
    branch12Func,
    branch2Func);

var tree = new LogicTree(handler);
tree.if(cond1 && !cond2)
    .thenIf(cond3)
    .thenIf(cond4 && !cond5)
    .thenIf(cond6)
    .else()
    .else()
    .else(!cond1 && cond2);

tree.evaluate();