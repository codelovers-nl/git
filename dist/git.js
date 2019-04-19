"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var Git = /** @class */ (function () {
    function Git(projectDir) {
        if (projectDir) {
            this.projectDir = projectDir;
        }
        else {
            this.projectDir = process.cwd();
        }
    }
    Git.prototype.clone = function (url) {
        return this.execute([
            'clone',
            url
        ]).status === 0;
    };
    Git.prototype.checkout = function (branch) {
        return this.execute([
            'checkout',
            branch
        ]).status === 0;
    };
    Git.prototype.createBranch = function (name) {
        return this.execute([
            'checkout',
            '-b',
            name
        ]).status === 0;
    };
    Git.prototype.commit = function (message) {
        return this.execute([
            'commit',
            '--no-verify',
            '-m',
            message ? message : 'Commit by @codelovers/git'
        ]).status === 0;
    };
    Git.prototype.push = function (remoteName) {
        return this.execute([
            'push',
            '-u',
            'origin',
            remoteName
        ]).status === 0;
    };
    Git.prototype.pull = function () {
        return this.execute([
            'pull'
        ]);
    };
    Git.prototype.add = function (value) {
        return this.execute([
            'add',
            value
        ]).status === 0;
    };
    Git.prototype.remove = function (value) {
        return this.execute([
            'rm',
            '-rf',
            value
        ]).status === 0;
    };
    Git.prototype.execute = function (args, printStderr) {
        if (printStderr === void 0) { printStderr = true; }
        return child_process_1.spawnSync('git', args, {
            cwd: this.projectDir,
            stdio: [
                'pipe',
                'pipe',
                printStderr ? 'inherit' : 'pipe'
            ],
            encoding: 'utf8'
        });
    };
    return Git;
}());
exports.Git = Git;
