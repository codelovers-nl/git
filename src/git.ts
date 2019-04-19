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

    checkout(url: string) {
    }

    branch(name: string) {

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

    push() {

    }

    pull() {

    }

    add(value: string) {

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