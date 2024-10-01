
# Stacking Git Branches
## What and why?
If you have a large changeset, it can be helpful to break it down into smaller branches that are easier to review in isolation; this is sometimes called "stacking".

Let's say you built a large new feature, and also had to make refactors to existing code, along with new automated tests. You could "stack" your branches by splitting them up into categories:

- Branch 1: New class changes, and unit tests for the new feature
- Branch 2: Refactors
- Branch 3: Integrating the new feature changes into existing code, plus automated tests related to the integration

## How?
To start "stacking", you should be at a point where you are code-complete in your git feature branch (example: `my-feature-branch`). We'll then use some git commands that reset all of your changes across all of your commits, and allow you to commit each file (or patch) back into your new stacked branches.

Let's say you plan on merging your stacked branches into your `main` branch. First you'll want to make sure you've pulled all upstream changes from `main`, and then reset your changes:

```sh
git checkout main
git pull
```

**(optional)** Let's get your branch up to date with the `main` branch by merging in changes, or rebasing your branch on top of main:
```sh
git checkout my-feature-branch

git merge main
# or
git rebase main
```

Now you are ready to reset all of your changes, and start the stacking process:

```sh
# Reset all your changes (without losing them!), 
# and mark them as ready to add back to git.
git reset --soft main
git restore --staged .
```

Let's create our first stacked branch. This will be the "base" branch that includes all our core changes for the new feature (new classes and unit tests, for instance):

```sh
git checkout -b my-feature-branch-models
```

Now you can add all of the files that relate to your models and unit tests for those new models and feature files to this branch, `my-feature-branch-models` with `git add` and `git commit` like normal.

Let's now create the next branch, which will be built off of your `my-feature-branch-models` branch (and not the `main` branch):

```sh
git checkout -b my-feature-branch-refactors

# you can also optionally tell git the branch you want to base your new branch from if you do not have this base branch checked out already:
# git checkout -b my-feature-branch-refactors my-feature-branch-models
```

Repeat the process of adding files to this branch, committing them, and move on to creating new branches, adding files, committing, etc.

That's it!
