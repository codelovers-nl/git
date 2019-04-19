import * as path from 'path'
import { Git } from './git'

const git: Git = new Git(
    path.join(
        process.cwd()
    )
);

git.add('.');
git.commit('Test commit');
git.push('master');