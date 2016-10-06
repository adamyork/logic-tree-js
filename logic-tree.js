'use strict';

class LogicBranch {
    constructor(condition, left, right) {
        this.condition = condition;
        this.left = left;
        this.right = right;
        this.isBranch = true;
    }
    evaluate() {
        if (this.condition) {
            this.iterate(this.left);
        } else {
            if (!this.right) {
                return;
            }
            this.iterate(this.right);
        }
    }
    iterate(side) {
        for (var i = 0; i < side.length; i++) {
            var func = side[i];
            if (func.isBranch) {
                func.evaluate();
            } else {
                func();
            }
        }
    }
}

class LogicTree {
    constructor() {
        this.varargs = arguments;
        this.handlers = [];
        this.branches = [];
        this.terminated = 0;
        this.handled = 0;
    }
    iff(condition, handler) {
        var branch = new LogicBranch(condition, [handler]);
        this.varargs[0] += '>>';
        branch.name = 'branch ' + this.branches.length;
        this.branches.push(branch);
        return this;
    }
    thenIff(condition, handler) {
        var branch = new LogicBranch(condition, [handler]);
        branch.name = 'branch ' + this.branches.length;
        var last = this.branches[this.branches.length - 1];
        last.left[1] = branch;
        this.branches.push(branch);
        return this;
    }
    els(handler) {
        var index = (this.branches.length - 1) - this.terminated - this.handled;
        if (arguments.length === 1) {
            this.branches[index].right = [handler];
        } else {
            var branch = new LogicBranch(arguments[0], [arguments[1]]);
            branch.name = 'branch ' + this.branches.length;
            this.branches.push(branch);
            this.branches[index].right = [branch];
        }
        this.handled++;
        return this;
    }
    end() {
        this.terminated++;
        return this;
    }
    evaluate() {
        this.branches[0].evaluate();
    }
}