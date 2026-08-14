/*
    # 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:

    ```bash
    *
    * *
    * * *
    * * * *
    * * * * *
    ```
*/

/*
    # TRICKS
        1. Run the OUTER for loop the number of times you a having the lines.
            - OUTER FOR LOOP is for ROWS
            - INNER FOR LOOP is for COLUMNS
            - OUTER FOR LOOP the number of lines is igual to number of rows, 
            is igual to number of times outer loop will run.

        2. How many columns are there with each row?
            - Identify for every ROW number how many columns are there or types of elements in the column.

        3. What do you need to print
*/      


for (let rows = 1; rows <= 5; rows++) {
    // console.log(rows);

    let stars = "";
    for (let columns = 1; columns <= rows; columns++) {
        stars += " *";
    }

    console.log(stars);
}