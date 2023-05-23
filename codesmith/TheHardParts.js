function display(data) {
  console.log(data);
}

const futureData = fetch("https://twitter.com/will/tweets/1");

futureData.then(display);

console.log("Me first!");

/*
Promises act as a placeholder for the data we expect to get back from the web browser feature's 
background work.
Any code we want to run on the returned data must also be saved on the promise object.
- Added using .then method to the hidden property 'onFulfilment'
- Promise obkects will automatically trigger the attached function to run 
(with its input being the returned data)

But we need to know how our promise-degerred functionality gets back into JavaScript to be run
We need a way of queuing up all this deferred functionality
*/

function display(data) {
  console.log(data);
}
function printHello() {
  console.log("Hello");
}
function blockFor300ms() {
  /*blocks js thread for 300ms*/
}

setTimeout(printHello, 0);

const future = fetch("https://twitter.com/will/tweets/1");
future.then(display);

blockFor300ms();

console.log("Me first!");
