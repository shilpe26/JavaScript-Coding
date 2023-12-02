// What is Promise and it's type ?

/*
PROMISE - The Promise object represents the eventual completion (or failure) 
of an asynchronous operation and its resulting value.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/

const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation (e.g., fetching data, timeout)
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Operation successful");
      } else {
        reject("Operation failed");
      }
    }, 1000);
});
  
myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/*
CHAINED PROMISE
Promises can be chained using .then() to perform a sequence of asynchronous operations.
*/

function stepOne() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Step One completed");
        resolve("Step One result");
      }, 1000);
    });
}
  
function stepTwo(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step Two completed with", previousResult);
      resolve("Step Two result");
    }, 1000);
  });
}

stepOne()
  .then((result) => stepTwo(result))
  .then((finalResult) => {
    console.log("Final Result:", finalResult);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  
/*
PROMISE TYPES (concurrency)

Promise.all()
Fulfills when all of the promises fulfill; rejects when any of the promises rejects.

Promise.allSettled()
Fulfills when all promises settle.

Promise.any()
Fulfills when any of the promises fulfills; rejects when all of the promises reject.

Promise.race()
Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills;
 rejects when any of the promises rejects.
*/

const promise1 = Promise.reject(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("foo");
      }, 3000);
});

const promises = [promise1, promise2, promise3];

Promise.all(promises)
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("Error in one of the promises:", error);
  });


Promise.allSettled(promises)
.then((results) => {
  console.log("All promises settled:", results);
});

Promise.race(promises)
.then((results) => {
  console.log("Promise 1st in race:", results);
})
.catch((error) => {
    console.error("Error in one of the promises:", error);
});

Promise.any(promises)
.then((results) => {
  console.log("Any promises resolved:", results);
})
.catch((error) => {
    console.error("Error in one of the promises:", error);
});