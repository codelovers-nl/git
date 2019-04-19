/// <reference types="node" />
import { SpawnSyncReturns } from 'child_process';
export declare class Git {
    private projectDir;
    constructor(projectDir?: string);
    clone(url: string): boolean;
    checkout(branch: string): boolean;
    createBranch(name: string): boolean;
    commit(message?: string): boolean;
    push(remoteName: string): boolean;
    pull(): SpawnSyncReturns<string>;
    add(value: string): boolean;
    remove(value: string): boolean;
    private execute;
}
