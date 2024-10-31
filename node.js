alert("Enter Any Number For Print His Table ") ;
let user_input = parseInt(prompt("Enter Number")) ;

document.write("<table border='1'>");
    for(i=1;i<=10;i++){
        document.write("<tr><th>",user_input,"</th><th> X </th><th>",i,"</th><th> = </th><th>",user_input*i,"</th></tr>");
    }
    document.write("<table>");