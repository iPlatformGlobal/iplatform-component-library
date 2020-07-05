echo "building storybook..."
yarn build-storybook
echo "moving storybook folder..."
mv ./storybook-static ../storybook-static
git branch -D deploy/temp
rm -rf .storybook config public src .gitignore .npmignore .npmrc package.json tsconfig.json yarn.lock
mv ../storybook-static/* ./*
git add .
git commit -m "feat: deployed storybook"
git push github gh-pages -f
git checkout dev