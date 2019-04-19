import { spawn, spawnSync, SpawnSyncReturns } from 'child_process'

export class Git {

    private projectDir: string

    constructor(projectDir? : string) {
        if (projectDir) {
            this.projectDir = projectDir
        } else {
            this.projectDir = process.cwd()
        }
    }

    clone(url: string) {

    }

    checkout(branch: string): boolean {
        return this.execute(
            [
                'checkout',
                branch
            ]
        ).status === 0
    }

    createBranch(name: string) {
        return this.execute(
            [
                'checkout',
                '-b',
                name
            ]
        ).status === 0
    }

    commit(message?: string): boolean {
        return this.execute(
            [
                'commit',
                '--no-verify',
                '-m',
                message ? message : 'Commit by @codelovers/git'
            ]
        ).status === 0;
    }

    push(remoteName: string): boolean {
        return this.execute(
            [
                'push',
                '-u',
                'origin',
                remoteName
            ]
        ).status === 0
    }

    pull() {
        return this.execute(
            [
                'pull'
            ]
        )
    }

    add(value: string) {
        return this.execute(
            [
                'add',
                value
            ]
        ).status === 0
    }

    remove(value: string) {

    }

    private execute(args: string[], printStderr = true): SpawnSyncReturns<string> {
        return spawnSync(
            'git',
            args,
            {
                cwd: this.projectDir,
                stdio: [
                    'pipe',
                    'pipe',
                    printStderr ? 'inherit' : 'pipe'
                ],
                encoding: 'utf8'
            }
        )
    }
}