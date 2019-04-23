## git原理以及实用指南
![avatar](https://img.shields.io/badge/GIT-Tenggouwa-9cf.svg)

### 上手

+ clone到本地仓库
  + ```git clone ```

+ 提交代码
  + 文件提交到暂存区 ```git add 文件名```
  + 提交 ```git commit```
  + 查看工作状态 ```git status```
  + 查看log ```git log```
  + push到中央仓库 ```git push```

+ 写完所有的 commit 后，不用考虑中央仓库是否有新的提交，直接 push 就好
如果 push 失败，就用 pull 把本地仓库的提交和中央仓库的提交进行合并，然后再 push 一次

### 进阶
+ HEAD/master/branch
  + HEAD 是指向当前 commit 的引用，它具有唯一性，每个仓库中只有一个 HEAD。在每次提交时它都会自动向前移动到最新的 commit 。
  + branch 是一类引用。HEAD 除了直接指向 commit，也可以通过指向某个 branch 来间接指向 commit。当 HEAD 指向一个 branch 时，commit 发生时，HEAD 会带着它所指向的 branch 一起移动。
  + master 是 Git 中的默认 branch，它和其它 branch 的区别在于：
    + 新建的仓库中的第一个 commit 会被 master 自动指向；
    + 在 git clone 时，会自动 checkout 出 master。
  + branch 的创建、切换和删除：
    + 创建 branch 的方式是 git branch 名称 或 git checkout -b 名称（创建后自动切换）；
    + 切换的方式是 git checkout 名称；
    + 删除的方式是 git branch -d 名称。
  + 常用命令
      + 创建分支 ```git branch branchName```
      + 切换分支 ```git checkout branchName```
      + 创建并切换分支 ```git checkout -b branchName```
      + 删除分支 ```git branch -d branchName```
      + 强制删除分支 ```git branch -D branchName```

+ push的本质
  + push 是把当前的分支上传到远程仓库，并把这个 branch 的路径上的所有 commits 也一并上传。
  + push 的时候，如果当前分支是一个本地创建的分支，需要指定远程仓库名和分支名，用 git push origin branch_name 的格式，而不能只用 git push；或者可以通过 git config 修改 push.default 来改变 push 时的行为逻辑。
  + push 的时候之后上传当前分支，并不会上传 HEAD；远程仓库的 HEAD 是永远指向默认分支（即 master）的。

+ merge
  + merge 的含义：
    + 从两个 commit「分叉」的位置起，把目标 commit 的内容应用到当前 commit（HEAD 所指向的 commit），并生成一个新的 commit；
  + merge 的适用场景：
    + 单独开发的 branch 用完了以后，合并回原先的 branch；
    + git pull 的内部自动操作。
  + merge 的三种特殊情况：
    + 冲突
      + 原因：当前分支和目标分支修改了同一部分内容，Git 无法确定应该怎样合并；
      + 应对方法：解决冲突后手动 commit。
    + HEAD 领先于目标 commit：Git 什么也不做，空操作；
    + HEAD 落后于目标 commit：fast-forward。

+ Feature Branching工作流
  + 每个新功能都新建一个 branch 来写；
  + 写完以后，把代码分享给同事看；写的过程中，也可以分享给同事讨论。另外，借助 GitHub 等服务提供方的 Pull Request 功能，可以让代码分享变得更加方便；
  + 分支确定可以合并后，把分支合并到 master ，并删除分支。

+ GIT查看改动
  + 查看历史中的多个 commit：log
    + 查看详细改动： git log -p
    + 查看大致改动：git log --stat
  + 查看具体某个 commit：show
    + 要看最新 commit ，直接输入 git show ；要看指定 commit ，输入 git show commit的引用或SHA-1
    + 如果还要指定文件，在 git show 的最后加上文件名
  + 查看未提交的内容：diff
    + 查看暂存区和上一条 commit 的区别：git diff --staged（或 --cached）
    + 查看工作目录和暂存区的区别：git diff 不加选项参数
    + 查看工作目录和上一条 commit 的区别：git diff HEAD

### 高级
