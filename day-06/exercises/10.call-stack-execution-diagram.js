/*
    ## 10. Create Call Stack Execution Diagram for this flow

    function f1() {}
    function f2() {}
    function f3() {
        f1();
    }
    f2();
    f3();
    f1();

*/

// Call Stack Execution Diagram

/*
    Step 1: f2() is called
    [Stack]
    |  f2 | <--- Top

    Step 2: f2() finishes
    [ Stack ]
    (Empty)

    Step 3: f3() is called
    [ Stack ]
    |  f3   | <--- Top

    Step 4: f1() is called (inside f3)
    [ Stack ]
    |  f1   |  <-- Top
    |  f3   |


    Step 5: f1() finishes
    [ Stack ]
    |  f3   |  <-- Top

    Step 6: f3() finishes
    [ Stack ]
    (Empty) 

    Step 7: f1() is called 
    [ Stack ]
    |  f1   |  <-- Top

    Step 8: f1() finishes
    [ Stack ]
    (Empty) 

*/