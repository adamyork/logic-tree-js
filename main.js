var treeResults = '';

function TestClassicControlFlowOutputMatchesLogicTree() {
    var cond1 = true;
    var cond2 = false;
    var cond3 = true;
    var cond4 = true;
    var cond5 = false;
    var cond6 = true;

    var classicResults = '';

    if (cond1 && !cond2) {
        classicResults += 'branch1-';
        if (cond3) {
            classicResults += 'branch1.1-';
            if (cond4 && !cond5) {
                classicResults += 'branch1.1.1-';
                if (cond6) {
                    classicResults += 'branch1.1.1.1-';
                }
            } else {
                classicResults += 'branch1.1.2-';
            }
        } else {
            classicResults += 'branch1.2-';
        }
    } else if (!cond1 && cond2) {
        classicResults += 'branch2-';
    }

    var tree = new LogicTree();
    var handlers = new HandlerFunctions();
    tree.iff(cond1 && !cond2, handlers.branch1Func.bind(this))
        .thenIff(cond3, handlers.branch11Func.bind(this))
        .thenIff(cond4 && !cond5, handlers.branch111Func.bind(this))
        .thenIff(cond6, handlers.branch1111Func.bind(this))
        .end()
        .els(handlers.branch112Func.bind(this))
        .els(handlers.branch12Func.bind(this))
        .els(!cond1 && cond2, handlers.branch2Func.bind(this));
    tree.evaluate();

    console.assert(treeResults === classicResults, 'test failed : output does not match');
    console.log('TestClassicControlFlowOutputMatchesLogicTree passed classicResults: ' + classicResults +
        ' treeResults ' + treeResults);
}

function TestClassicControlFlowOutputMatchesLogicTree2() {
    var cond1 = false;
    var cond2 = true;
    var cond3 = true;
    var cond4 = false;
    var cond5 = true;
    var cond6 = true;

    var classicResults = '';

    if (cond1 && !cond2) {
        classicResults += 'branch1-';
        if (cond3) {
            classicResults += 'branch1.1-';
            if (cond4 && !cond5) {
                classicResults += 'branch1.1.1-';
                if (cond6) {
                    classicResults += 'branch1.1.1.1-';
                }
            } else {
                classicResults += 'branch1.1.2-';
            }
        } else {
            classicResults += 'branch1.2-';
        }
    } else if (!cond1 && cond2) {
        classicResults += 'branch2-';
    }

    var tree = new LogicTree();
    var handlers = new HandlerFunctions();
    tree.iff(cond1 && !cond2, handlers.branch1Func.bind(this))
        .thenIff(cond3, handlers.branch11Func.bind(this))
        .thenIff(cond4 && !cond5, handlers.branch111Func.bind(this))
        .thenIff(cond6, handlers.branch1111Func.bind(this))
        .end()
        .els(handlers.branch112Func.bind(this))
        .els(handlers.branch12Func.bind(this))
        .els(!cond1 && cond2, handlers.branch2Func.bind(this));
    tree.evaluate();

    console.assert(treeResults === classicResults, 'test failed : output does not match');
    console.log('TestClassicControlFlowOutputMatchesLogicTree2 passed classicResults: ' + classicResults +
        ' treeResults ' + treeResults);
}

function TestClassicControlFlowOutputMatchesLogicTree3() {
    var cond1 = true;
    var cond2 = false;
    var cond3 = false;
    var cond4 = false;
    var cond5 = true;
    var cond6 = true;

    var classicResults = '';

    if (cond1 && !cond2) {
        classicResults += 'branch1-';
        if (cond3) {
            classicResults += 'branch1.1-';
            if (cond4 && !cond5) {
                classicResults += 'branch1.1.1-';
                if (cond6) {
                    classicResults += 'branch1.1.1.1-';
                }
            } else {
                classicResults += 'branch1.1.2-';
            }
        } else {
            classicResults += 'branch1.2-';
        }
    } else if (!cond1 && cond2) {
        classicResults += 'branch2-';
    }

    var tree = new LogicTree();
    var handlers = new HandlerFunctions();
    tree.iff(cond1 && !cond2, handlers.branch1Func.bind(this))
        .thenIff(cond3, handlers.branch11Func.bind(this))
        .thenIff(cond4 && !cond5, handlers.branch111Func.bind(this))
        .thenIff(cond6, handlers.branch1111Func.bind(this))
        .end()
        .els(handlers.branch112Func.bind(this))
        .els(handlers.branch12Func.bind(this))
        .els(!cond1 && cond2, handlers.branch2Func.bind(this));
    tree.evaluate();

    console.assert(treeResults === classicResults, 'test failed : output does not match');
    console.log('TestClassicControlFlowOutputMatchesLogicTree3 passed classicResults: ' + classicResults +
        ' treeResults ' + treeResults);
}

TestClassicControlFlowOutputMatchesLogicTree();
this.treeResults = '';
TestClassicControlFlowOutputMatchesLogicTree2();
this.treeResults = '';
TestClassicControlFlowOutputMatchesLogicTree3();