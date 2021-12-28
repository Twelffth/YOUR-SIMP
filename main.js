nameofthestudentarray = [];

function submit() {

    var displayarray = [];
    for (var i = 0; i <= 4; i++) {
        var nameofthestudent = document.getElementById("name_of_the_student_i").value;
        console.log(nameofthestudent);
        nameofthestudentarray.push(nameofthestudent);

    }
    console.log(nameofthestudentarray);

    var length = nameofthestudentarray.length;
    console.log(length);
    for (var k = 0; k < length; k++) {
        displayarray.push("<h4> name -" + nameofthestudentarray[k] + "</h4>");
        console.log(displayarray);

    }
    document.getElementById("display_name_with_commas").innerHTML = displayarray;
}