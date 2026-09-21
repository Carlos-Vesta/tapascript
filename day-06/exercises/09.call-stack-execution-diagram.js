/*
    ## 9. Create Call Stack Execution Diagram for this flow

    function f1() {}
    function f2() {
        f1();
    }
    f2();

*/

//Call Stack Execution Diagram

/*
    Step 1: f2() is called
    [ Stack ]
    |  f2   |  <-- Top

    Step 2: f1() is called (inside f2)
    [ Stack ]
    |  f1   |  <-- Top
    |  f2   |

    Step 3: f1() finishes
    [ Stack ]
    |  f2   |  <-- Top

    Step 4: f2() finishes
    [ Stack ]
    (Empty)

*/