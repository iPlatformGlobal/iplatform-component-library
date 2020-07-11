#!/usr/bin/env bash
BRANCH=$(git branch | grep \* | cut -d ' ' -f2)
git push -u origin $BRANCH --no-verify
