/*
npm commands:
    npm init

    npm install babel --save-dev
    npm install babel-cli --save-dev
    npm install babel-core --save-dev
    npm install babel-loader --save-dev 
    npm install babel-preset-es2015 --save-dev
    npm install commonjs --save-dev 
    npm install typescript --save-dev
    npm install typescript -g               (needed for tsc command)  
    npm install rimraf
    npm install tslint --save-dev
    npm install webpack --save-dev  
    npm install uglifyjs --save-dev
    npm install bower --save-dev
    npm install bower -g
    npm install http-server --save-dev -g
    npm install typings --save-dev

    npm install awesome-typescript-loader@0.17.0 --save-dev
    npm install webpack-merge@0.14.0 --save-dev
    npm install jquery@2.2.4 --save-dev
    npm install jquery@2.2.4 --save
    npm install angular@1.5.5 --save
    npm install angular-route@1.5.5 --save

    npm install angular --save-dev
    npm install angular-animate --save-dev
    npm install angular-mocks --save-dev
    npm install angular-resource --save-dev
    npm install angular-route --save-dev
    npm install angular-ui-router --save-dev
    npm install bootstrap --save-dev
    npm install html-loader --save-dev
    npm install html-webpack-plugin --save-dev





bower commands:
     bower init --config.interactive

     bower install angular --save
     bower install angular-animate --save
     bower install angular-mocks --save
     bower install angular-resource --save
     bower install angular-route --save
     bower install angular-ui-router --save
     bower install bootstrap --save
     bower install jquery --save


typings commands:
    typings install dt~angular --save --global
    typings install dt~angular-animate --save --global
    typings install dt~angular-mocks --save --global
    typings install dt~angular-resource --save --global
    typings install dt~angular-route --save --global
    typings install dt~angular-ui-router --save --global
    typings install dt~jquery --save --global



package.json - scripts:

    1 npm run build:
        prebuild
            npm run tslint
                uses tslint to lint the app/greeter.ts file. If any errors found, it will terminate

            npm run rimraf
                deletes all files in ./js (ts to js), ./build (ES6 to ES5) and ./dist (bundled and minified)

        build
            tsc 
                - runs the typescript compiler
                - takes the files in the tsconfig.json, transpiles into js, and places them in the ./js folder

            npm run babel 
                - runs the babel compiler used for es2015 syntax (import export). 
                - This takes all the js transpiled files in the ./js folder and 
                  transpiles it into ECMAScript2015 code. This puts ES6 code into the ./build folder

        postbuild
            npm run bundle
                - uses the webpack.config.js file for the config settings
                - uses ./app/index.js file as an entry point. Note this will be lots of modules in angular
                - because .app/index.js file has many dependencies it bundles these altogether 
                - dependencies include the es5 js files which have been transpiled: (ts to js, jsES6 to jsES5) and stored in the ./build
                - this means all dependencies for the .app/index.js file and the index.js file itself are bundled into one clean file
                - it spits the file into the output: path: ./dist, file: bundle.js
                - the html-loader and html-webpack-plugin (dev dependencies) are configured in the webpack.config.js. 
                        This assists with bundling the Angular Templates within the bundle.js

            
            npm run uglifyjs
                - minifies the file in the ./dist/bundle.js
                - uses the -m (mangle) and -c (compress)
                - finally -o outputs it to creates a new min.js file

    2 npm run start
        the index.html in the ./ (root directory) has references to the javascript files: dist/min.js (commented out dist/bundle.js)
        which will use those js files to run the code. 
        This script uses the http-server (installed by npm) and specifies the url is localhost:3000



    




To make the app run
    npm run build
    npm run start



typescript:
    .vscode/tasks.json
        settings for the ts compiler eg:
        to run the typescript compiler use the command: tsc. This is specified in the command attribute

    tsconfig.json
        Once tasks.json is set up, we use the tsconfig.json file to add settings for the tsc command
        This includes:
            ECMAScript version
            outDir specifies where to put the transpiled js code - in the ./js folder
            module loader = commonjs
            specifies a js sourceMap
            exclude - all the files that the compiler shouldn't transpile. 
                Note: the files[] caused problems as typings index.d.ts files such as angular wouldnt compile
    
    tslint.json
        config file for tslint. To create this file, need to run the command:
            npm run tslintInitial
        "tslintInitial": "tslint --init" only ever needs to be run once to create a tslint.json file
        This sets all the default settings
    
    webpack.config.js
        This is the configuration file for webpack.
        Specifies the entry (js/app.module.js), which is the trasnpiled ts and es2015 Angular Module.
        This app.module.jsis the main Angular Module that imports all the components.
        It also is the main dependency injector for the project, and configures the routing for the web application   
        This then specifies where to put the output bundle.js file - ./dist/bundle.js
        specifies the babel module loader that is used
            the presets is very important for the babel to work. without this, we would have to have a require statement in our entry point:
            require('babel-register')({ "presets": ["es2015"]}); and have a npm install babel-register --save-dev

    .bowerrc
        tells bower where to save the bower_components - configured to app/bower_components
        bower_components is like node_modules this is where the bower dependencies are stored

    
    bower.json
        to create one, run:
            bower init --config.interactive
        this then asks to fill in details.
        lists the dependencies. very like npm, when you bower install the dependencies get added here


    typings.json
        after running the command: 
                                    npm install typings 
        you can add d.ts files via the typings commands, these commands are above. 
        This adds two things: a typings folder and a typings.json file.
        It then adds an index.d.ts file in the typings folder, which is a bunch of namespaces (///<reference path="">)
        When you run a typings command it does two things:
            1 This automatically adds these typings to the root typings.json file.
            2 It adds the definition to the typings/globals - including another index.d.ts and typings.json file in this folder.






        How it all currently works:
            ts in ./app transpiled to js file
            es2015 js gets transpiled to build file
            webpack bundled and minified in dist
            index.html is main entry point which has the minified script
            body is the ng-view and ng-app is myapp which is specified in the app.module.ts
            app.module.ts has all dependencies (vendor and angular components and services)
            app.module.ts has routing, bootstrap. 
            Each folder within app will be a component (template, controller) and services

        


SET UP GIT FOR FIRST TIME:

1 add a .gitignore to the root directory
    go to: https://www.gitignore.io/
    type in node and generate
    this generates a .gitignore file for you...
    copy and paste this into the .gitignore file in your root directory.
    this ignores stuff like node_modules folder which is useless...


2 Go to github and sign in - create a new repository.

Run these commands:
    git init
    git status (notice everything in red)
    git add --all
    git status (notice everything in green)
    git commit -m "description"
    git status (notice now says nothing to commit - your code is safe)
    (the next step depends on the generated url)
    git remote add origin https://github.com/...
    git push -u origin master


PUSHING CHANGES:

change file
git status (to see what is outstanding - notice it is red)
git add --all
git status (notice it is green)
git commit -m "description"
git status (notice now says nothing to commit - your code is safe)
git push -u origin master


todo - less, angular2 (currently on angular 1.5.8)
     - separate config file
     - git
     - vendor.ts
     - adding components


*/