[![Coverage Status](https://coveralls.io/repos/github/vkingmaker/politico/badge.svg?branch=develop)](https://coveralls.io/github/vkingmaker/politico?branch=develop)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/vkingmaker/politico.svg?branch=develop)](https://travis-ci.com/vkingmaker/politico)

# Politico
> Let's fight against corruption and malpractices in our continent to a great extent.

Depressing the vote share of the rival candidates is choking the peace and well being of our
                    country.
                    It's high time we check mate this evil that has eaten deep into our country, The status-quo must
                    not remain. On this platform we will ensure that every vote counts...The hope that we will one day
                    have a country free of electoral crime has been rekindle


## Installing / Getting started
At the minimal you need to have node installed on your machine since it is the back-bone of this project

download and install node
create a javascript file `app.js` in a preffered location
open the file with your favorite text editor and type any valid js code. say `console.log('hello World')`;
using the terminal/console navigate to the directory where you save the file `app.js`
from the directory execute `$node app` using the terminal.

If after following the steps above you got `'hello world'` printed to your terminal/console, it means you have node properly installed so lets dive right in.

## Developing
This repository can actually be forked as contributors will be welcomed and have their worked merged to the main project if it is consider 'useful' as a feature or a bug fix for the application However the time is not right now since it is being reviewed by my Learning Facilitator .

```shell
$ git clone https://github.com/vkingmaker/politico.git
$ cd politico
$ npm install
$ npm start 
```

By running `$ git clone https://github.com/vkingmaker/politico.git` in your terminal/console it will fetch the project files from the remote repository and save to your preferred location on your hard drive, then `cd politico` will change your current directory to the the location of the cloned project on your computer. Because the dependencies used to build this application was not sent to the remote repository you have to run `npm install` to install the necessary dependencies and finally `npm start` to launch the application using a local server.


### Building

I have configure the script file by piping the output of one script as an input to another script where it is appropriate which makes building the project super easy.
After any significant change and you want to test the current state of the application just run the script. 

```shell
npm start
```

the script above will first of all run `npm run clean` to clean the previously transpiled code base using rifraf, then it will run `npm run build` to transpile the current code base after which it will serve your project in the port specified. (in my case PORT=3000)

## Features
Since the original intention of writing this project is to reduce 
electoral crime amongst the core features of the project are:

* A user will be able to sign up to use the platform
* An existing user will be able to login to be able to use the core feature of the platform.
* An admin will be able to add Political parties to the platform
* An admin will be able to add office to the platform
* A user will be able to declare interet in any of the offices and also be able to 
  contest and and be voted for on the platform.
* A user will only be allowed to vote once amongst other amazn


## Contributing

Even though this project is not ready for public consumption it will be open source in due time,
currently It is being supervised by my Learning Facilitator at Andela Nigeria.

Feel free to clone the repository or fork it, however Pull Request are will not be incorported into the code base at this time

The project is set up using Babel to transpile the original code (ES6) to ES2015, travis CI for continuous Integration and delivery
coveralls for coverage.

I am using Airbnb style for linting, mocha for testing and I will eventually use Postgre sql for my data layer

## Links

This links below are directly related to the project in this repository. 
The link to the Landing page of the template and my Email incase you notice 
any vulnerability of sensitve bug

- Project homepage: https://vkingmaker.github.io/politico/index.html
- Repository: https://github.com/vkingmaker/politico
- Issue tracker: https://github.com/vkingmaker/politico/issues
  - In case of sensitive bugs like security vulnerabilities, please contact
    vkingmaker1@gmail.com directly instead of using issue tracker. I value your effort
    to improve the security and privacy of this project!



## Licensing

Copyright (c) 2019 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
"The code in this project is licensed under MIT license."
