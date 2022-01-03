document.write(typeof "10"  );
document.write("10" + 6);


document.write(0/0);

document.write(isNaN('this is a string'));//NaN(not a number) is true

document.write(isNaN('7'));


function infinities(){ //values that exceed the maximum legnth of numbers in javascript are determined to be infinity
    document.getElementById("negative-infinity").innerHTML =-4e402;

    document.getElementById("infinity").innerHTML =1.3e400;

}

//Boolean logic
document.write(10 > 2)


console.log(3 < 10);//this would display the answer on the website console, to access console press F12

document.write(9 == 8)//this is asking if 9 is equals to eigth in this case it is false


document.write(8 === 8)//this is asking if 8 is equal to 8 and if they are the same data type, in this case is true
document.write(8 === 9);
document.write(8 === "nine")
document.write('eight' === 'nine')


//and operator

document.write(10<7 && 5>3)
document.write(2>10 || 15<12)

function not_operator(){
    document.getElementById("Not").innerHTML= !(6 > 11)
}

