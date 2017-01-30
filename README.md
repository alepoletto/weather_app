# weather_app

this is a command line weather APP.

## Install
to install follow these steps:

1. clone this repository
2. go to the project folder and execute the follow command:

```
npm install
```

## How to use:

run the follow command:

```
node app.js -a "<YOUR_ADDRESS"
```

example:

```
node app.js -a "infinite loop"
```

will have an output similar to this:

```
Infinite Loop, Cupertino, CA 95014, USA
It's currently 4.46 celcius. it feels like 4.46 celcius
Summary: Clear
```

## Command line options

###-a, --address 
address to fetch weather for

###-s, --save
save an address as default, to use when you don't pass an address

###-h, --help 
Show help.
