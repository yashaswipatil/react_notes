**NPM** : originally it  was called node package manager because it was built only for node.js but currently it has become a broader ecosystem which supports javascript projects also. so npm manages packages ,all these packages like libraries or utilities that are needed are hoisted on npm.

**WebPack/Parcel and it's uses**: WebPack or Parcel are module bundlers that are used in Javascript applications. module bundlers are nothing but a tool that takes all our codes and then compresses it into smaller or lesser number of files that can load efficient on web browser. it is used for :
1.creates a development build with source maps and faster rebuilds
2.local development server to preview our app
3.Hot module replacements (HMR) for instant updates without fully reloading
4.faster builds are also done using caching
5.Image optimization 
6.minification in our app
7.bundling is also done
8.compresses our files
9.consistent hashing
10.differential bundling - supports old browsers
11.diagnostic-identifies and reports build time or runtime issues
12.error handling
13.helps test secure APIs , cookies and service workers in secure environment during  development 
14.tree shaking - eliminates unused code from libraries and modules to reduce bundle size
15.different builds for development and production

**.parcel-cache**: is hidden folder that is created automatically by parcel to store intermediate build data and complied asset.

**npx** : command line tool that comes with nodejs and is used to run node packages without installing them globally.

**difference between dependencies and dev dependencies**: 1.dependencies used in production and development & dev dependencies is used in  development only 
2.dependencies is installed for both production and development but dev dependencies in installed for development only
3.examples for dependencies would be axios , lodash , react but for dev dependencies would be babel , eslint , jest

**Tree shaking** : it is a javascript optimization technique and used during the build process to remove unused code from your final bundle

**Hot Module Replacement** : is a feature provided by the build tools like webpack or parcel that lets you updates modules in the browser at the runtime without a full page reload

**5 favorite superpowers of parcel and describing it in own words** : 1.local development server to preview the app 2. diagnostic - identifies and reports build time or runtime 3.helps secure APIs , cookies and service workers in secure environment during the development

**.gitignore what should be added and what not** : is a text file which contains file and folders that should be ignored and asked to not to keep the track of them in version control

**package.json and package.lock.json** : package.json is our app's dependency lists and config - it defines what our packages want
package.lock.json locks down the exact versions to ensure reproducible builds across machines or teams

**reason to never modify package.lock.json**:because it is auto generated and managed by npm , modifying it manually could lead to mismatch version

**node_modules** : is a folder where all your project dependencies are installed. it should never be pushed to git because it contains thousands of folders and hundreds of mbs

**dist**: is a distribution folder where you final , production ready files are stored. it typically contains minified HTML , CSS and javascript

**browserslist** : is configuration tool used in frontend projects to specify which browsers your code should support

**different bundlers** : vite , webpack , parcel

**^-caret and ~-tilda** : caret has minor and major upgrades but tilda has major changes only . tilda is not preferred because lots of changes could be there and it could cause lots of changes in the application

**script types in HTML** : 1.text/javascript -standard javascript 
2.module -indicates ES^ module
3.external script
4.JSON data( for fetching with JS)