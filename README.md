# @Codelovers
## Git Client


### Installing

Install the Git client with the following command

```
npm install --save @codelovers-nl/git
```

### Usage

```
const git: Git = new Git();

if (git.add('.') && git.commit('Added all files with @codelovers-nl/git')) {
    git.push('master');
}
```