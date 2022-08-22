// Built-in event
/* Adding a click event to a button in the DOM */
let evt1_btn = document.getElementById('evt1_btn');
let evt1_input = document.getElementById('evt1_input');
let evt1_output = document.getElementById('evt1_output');

let evt1_display = () => {
    evt1_output.innerHTML = `Hello there ${evt1_input.value}. This event was triggered`
}

evt1_btn.addEventListener('click', evt1_display);

/* changing body backgound color */
let evt2_btn = document.getElementById('evt2_btn');
let evt2_output = document.getElementById('evt2_output');
let evt2_btn2 = document.getElementById('evt2_btn2');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    evt2_btn.style.backgroundColor = rndCol;
    evt2_output.innerHTML = rndCol;
}

evt2_btn.addEventListener('mouseover', changeBackground);

evt2_btn2.addEventListener('click', function() {
    evt2_btn.style.backgroundColor = '#3b82f6';    
    evt2_output.innerHTML = '';
});

// Custom event
/* Using the CustomEvent constructor*/
let c_evt1_output = document.getElementById('c_evt1_output');
let c_evt1_btn = document.getElementById('c_evt1_btn');
c_evt1_btn.addEventListener('click', function () {
    const btn = document.getElementById('c_evt1_input');
    const myEvent = new CustomEvent("myCustomEvent", { detail: { hello: "World" } });

    c_evt1_input.addEventListener("myCustomEvent", e => {
        console.log(e.detail) // { hello: "World" }
        evt1_output.innerHTML = `Custom event fired. The data passed is ${JSON.stringify(e.detail)}`;
    });

    c_evt1_input.dispatchEvent(myEvent);
});


// Dynamic Typing
/* variable myvar can be assigned values of multiple types */
let myvar;
myvar = 0;
console.log(myvar); // 0
myvar = 'Hello world';
console.log(myvar); // Hello world
myvar = { 'key': 'value' };
console.log(myvar); // {key:'value'}

let dt_input = document.getElementById('dt_input');
let dt_output = document.getElementById('dt_output');
let dt_btn = document.getElementById('dt_btn');
dt_btn.addEventListener('click', function () {
    console.log(dt_input.value);
    console.log(typeof dt_input.value);
    console.log(`Type: ${typeof dt_input.value}, Value: ${JSON.stringify(dt_input.value)}`);
    dt_output.innerHTML = `Type: ${typeof dt_input.value}, Value: ${JSON.stringify(dt_input.value)}`;

});


// Promise
let p_btn = document.getElementById('p_btn');
let p_input = document.getElementById('p_input');
p_btn.addEventListener('click', function () {
    const myPromise = new Promise(function (resolve, reject) {
        setTimeout(function () { 
            resolve(`Hello World! You typed: ${p_input.value}`); 
        }, 3000);
    });

    myPromise.then(function (value) {
        document.getElementById("p_output").innerHTML = value;
    });
});




/* ########### */
/* let btn = document.getElementById('hello');

btn.addEventListener('click', function() {
    console.log('Hello World');
}); */

/* const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}); */


/* const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
} */


/* // Inline Event Handler
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
function bgChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
} */

/* // Using addEventListener()
const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

// btn.addEventListener('click', () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });

// function changeBackground() {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
// }

// function changeTextColor() {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     btn.style.color = rndCol;
// }

//btn.addEventListener('click', changeBackground);
//btn.addEventListener('click', changeTextColor);

// Removing event listener
//btn.removeEventListener('click', changeBackground); /

const controller = new AbortController();

btn.addEventListener('mouseover', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}, { signal: controller.signal }); // pass an AbortSignal to this handler


controller.abort(); // removes any/all event handlers associated with this controller */


/* // Event objects e/evt/event
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener('keydown', (event) => {
    output.textContent = `You pressed "${event.key}".`
}); */


// Custom Events

/* // Event constructor
const myEvent = new Event('myevent', {
    bubbles: false,
    cancelable: true,
    composed: false
}); */

/* // CustomEvent constructor
const myEvent = new CustomEvent("myevent", {
    detail: {},
    bubbles: true,
    cancelable: true,
    composed: false,
});

document.querySelector("#customid").addEventListener("myevent", (event) => {
    console.log("I'm listening on a custom event");
document.querySelector("#customid").dispatchEvent(myEvent);
}); */


/* // Trigger built-in event
const select = document.querySelector('select');

// Listen for change event
select.addEventListener('change', (e) => {
    console.log(`A new value is selected.`);
});

// Programmatically trigger `select` event
const e = new Event('select');
select.dispatchEvent(e); */

/* // Trigger custom event
const select = document.querySelector('select');
// Listen for `hello` event
select.addEventListener('hello', (e) => {
    console.log(`Hey there!`);
});

// Programmatically trigger `hello` event
const e = new Event('hello');

select.dispatchEvent(e); */


/* const myEvent = new Event("myCustomEvent")
document.addEventListener("myCustomEvent", e => {
    console.log(e)
})
document.dispatchEvent(myEvent) */

// Custom Event Creation
// const btn = document.querySelector('button');
// const myEvent = new Event("myCustomEvent")

// btn.addEventListener("myCustomEvent", e => {
//     console.log(e)
// });

// btn.dispatchEvent(myEvent);


// const btn = document.querySelector('button');
// const myEvent = new CustomEvent("myCustomEvent", { detail: { hello: "World" } });

// btn.addEventListener("myCustomEvent", e => {
//   console.log(e.detail) // { hello: "World" }
// });

// btn.dispatchEvent(myEvent);


/* // Dynamic Typing
let a;
a = 0;
console.log(a); // 0
a = 'Hello world';
console.log(a); // Hello world
a = { 'key': 'value' };
console.log(a); // {key:'value'}
 */


/* Promise */

/* let promise = new Promise(function (resolve, reject) {
    // executor (the producing code)
})
.then(
// argument 1: a function that runs when the promise is resolved and receives the result.
// argument 2: a function that runs when the promise is rejected and receives the error.
)
.catch(
// function that only returns the errors
)
.finally(
// always runs, when the promise is settled: be it resolve or reject.
); */


/* let promise = new Promise(function (resolve, reject) {
    // the function is executed automatically when the promise is constructed

    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
}); */

// promise.then(
//     function (result) { /* handle a successful result */ },
//     function (error) { /* handle an error */ }
// );

/* let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});
// resolve runs the first function in .then
promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
); */

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });
// // .catch(f) is the same as promise.then(null, f)
// promise.catch(alert); // shows "Error: Whoops!" after 1 second

/* new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
})
    .then(result => alert(result))// <-- .then shows "value"
    .finally(() => alert("Promise ready")); // triggers first */

// async function myFunction() {
//     return "Hello";
// }
// myFunction().then(
//     function (value) { /* code if successful */ },
//     function (error) { /* code if some error */ }
// );

// // works only inside async functions
// let value = await promise;
