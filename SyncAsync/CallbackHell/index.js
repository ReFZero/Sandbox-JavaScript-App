function func1(callback) {
  setTimeout(() => {
    console.log("Task 1");
    callback();
  }, 3000);
}

function func2() {
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
}
func1(func2);

// Uzycie wielu callback moze spowodowac Callback Hell
//- sytuacje gdzie wiele callbacków jest zagniezdzonych w innych
// lepiej uzyc Promise + async/await

function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 completed");
    callback();
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 completed");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 completed");
    callback();
  }, 3000);
}

function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 completed");
    callback();
  }, 1500);
}
// Callback Hell 
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("All tasks completed");
      });
    });
  });
});
