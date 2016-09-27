'use strict';

class LogicHandler {
    constructor(...args) {
        this.handlers = args;
    }
}

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
    constructor(handler) {
        this.handler = handler;
        this.branches = [];
        this.terminated = 0;
    }
    if (condition) {
        var branch = new LogicBranch(condition, [this.nextHandler()]);
        branch.name = 'branch ' + this.branches.length;
        this.branches.push(branch);
        return this;
    }
    thenIf(condition) {
        var branch = new LogicBranch(condition, [this.nextHandler()]);
        branch.name = 'branch ' + this.branches.length;
        var last = this.branches[this.branches.length - 1];
        last.left[1] = branch;
        this.branches.push(branch);
        this.terminated++;
        return this;
    }
    else() {
        var index = this.branches.length - (this.terminated + 1);
        if (arguments.length === 0) {
            this.branches[index].right = [this.nextHandler()];
        } else {
            var branch = new LogicBranch(arguments[0], [this.nextHandler()]);
            branch.name = 'branch ' + this.branches.length;
            this.branches.push(branch);
            this.branches[index].right = [branch];
        }
        this.terminated--;
        return this;
    }
    end() {
        this.terminated++;
        return this;
    }
    evaluate() {
        this.branches[0].evaluate();
    }
    nextHandler() {
        return this.handler.handlers[this.branches.length];
    }
}