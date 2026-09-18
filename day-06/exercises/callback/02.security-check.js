/*
    Exercise 2: The Security Check
    Write a function called checkAccess(userRole, callback).

    * Inside the function, use an if statement. If userRole is strictly equal to "admin", 
      call the callback and pass "admin" to it.
    * If it is not "admin", just console.log("Access Denied").

    Your task:

    1. Write the checkAccess function.
    2. Create a callback function called welcomeUser. 
    It should take the role and console.log "Welcome, Administrator!".
    3. Test it twice: once with "admin" and once with "guest".

    Goal: Practice using if/else logic to decide whether or not to trigger a callback.

*/

function checkAccess(userRole, callback) {
    if (userRole === "admin") {
        callback(userRole);
    } else {
        console.log("Access Denied!");
    }
}


function welcomeUser(role) {
    console.log(`Welcome, ${role}!`);
}


checkAccess("admin", welcomeUser);
checkAccess("guest", welcomeUser);