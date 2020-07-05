echo "building storybook..."
yarn
yarn run build-storybook
echo "moving storybook folder..."
rm -rf ../storybook-static
mkdir ../storybook-static
mv ./storybook-static/* ../storybook-static/
git branch -D deploy/temp
git checkout -b deploy/temp
rm -rf .storybook config public src .gitignore .npmignore .npmrc package.json tsconfig.json yarn.lock
mv ../storybook-static/* ./*
git add .
git commit -m "feat: deployed storybook"
git push github gh-pages -f
git checkout dev
git branch -D deploy/temp
git add . && git stash && git stash drop
rm -rf ./storybook-static
pause