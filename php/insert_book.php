<?php
include "../php/SQL.php";
    //require_once 'insert_book.php';
    $nomer =addslashes($_POST['nomer']);
    $book_theme_name = addslashes($_POST['book_theme_name']);
    $book_name = addslashes($_POST['book_name']);
    $book_outhors = addslashes($_POST['book_outhors']);
    $publisher =  addslashes($_POST['publisher']);
    $year = addslashes($_POST['year']);
    $pages =    addslashes($_POST['pages']);
    $ISBN = addslashes($_POST['ISBN']);
    $other =    addslashes($_POST['other']);
    $date = addslashes($_POST['date']);

    $ext_nomer =    addslashes($_POST['ext_nomer']);
    $city = addslashes($_POST['city']);
    $price =    addslashes($_POST['price']);
    $BBK =  addslashes($_POST['BBK']);
    $UDK =  addslashes($_POST['UDK']);
    $format = addslashes($_POST['format']); 
    
    $query = 'INSERT INTO books(    
    ext_nomer,
    city,
    price,
    BBK,
    UDK,
        format,
    book_theme_name,
    book_name,
    book_outhors,
    pages,
    year,
    publisher,
    date,
    other,
    ISBN) VALUES ("' . 

        $ext_nomer . '", "' .
        $city . '", "' .
        $price . '", "' .
        $BBK . '", "' .
        $UDK . '", "' .
        $format . '", "' .
        $book_theme_name . '", "' .
        $book_name . '", "' .
        $book_outhors . '", "' .
        $pages . '", "' .
        $year . '", "' .
        $publisher . '", "' .
        $date . '", "' .
        $other . '", "' .
        $ISBN . '")';
    mysql_query($query);
    



$query2 = 'INSERT INTO books_history(book_id, readerid, operation) VALUES ('.$nomer.', 0, "&#1076;&#1086;&#1076;&#1072;&#1085;&#1086;")';
    mysql_query($query2);
echo($query2);


    mysql_close($new_connection);

?>  