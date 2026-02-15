alert( null || 2 || undefined ); // true (2)

alert( alert(1) || 2 || alert(3) ); // first 1 and then 2 

alert( 1 && null && 2 ); // null

alert( alert(1) && alert(2) ); // first 1 and then indefinned

alert( null || 2 && 3 || 4 ); // 3

let age;
if( age>=14 && age<=90){
    console.log("the age between 14 and 90");
}

if(age<!14 && age>!90){
}
if( age < 14 || age > 90 ){
}

if (-1 || 0) alert( 'first' ); // true
if (-1 && 0) alert( 'second' ); // false
if (null || -1 && 1) alert( 'third' ); // true 

let begin = prompt("Who's there?", "");

if(begin == 'Admin'){
    let pass = prompt("Password", "");
    if(pass == 'TheMaster'){
        alert('Welcome!');
    } else if ( pass ==="" || pass ===null){
        alert('Canceled');
    } else{
        alert('Wrong password');
    }
} else if( begin == "" || begin == null){
    alert('Canceled');
} else{
    alert('Idk');
}
