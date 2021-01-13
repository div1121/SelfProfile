var Y1S1 = [["ENGG1120","Intro to Engineering Design","A-"],
    ["ESTR1102","Problem Solving by Programming","A"],
    ["MATH1510","Calculus for Engineers","A"],
    ["PHYS1110","Engineering Phy: Mech & Thermo","A"]]

var Y2S1 = [["CSCI1130","Intro to Computing using Java","A-"],
    ["ENGG2020","Digital Logic and Systems","A"],
    ["ESTR2004","Discrete Math for Engineers","A-"]]

var Y2S2 = [["CSCI3280","Intro to Multimedia Systems","A"],
    ["ENGG1120","Linear Algebra for Engineers","A"],
    ["ESTR1003","Engineering Physics","A-"],
    ["ESTR2102","Data Structures","A"]]

var Y3S1 = [["CSCI3130","Formal Languages and Automata Theory","A"],
    ["CSCI3150","Introduction to Operating System","A"],
    ["CSCI3170","Introduction to Database System","A"],
    ["CSCI3260","Principles of Computer Graphics","A"],
    ["ESTR3108","Fundamentals of Artificial Intelligence","A"]]

var Y3S2 = [["CSCI3100","Software Engineering","IP"],
            ["CSCI3180","Principles of Programming Languages","IP"],
            ["CSCI3250","Computer and Society","IP"],
            ["CSCI4120","Principles of Computer Game Software","IP"],
            ["CSCI5210","Advanced Computer Graphic and Visualization","IP"],
            ["ESTR4104","Distributed and Parallel Computing","IP"]]

var plang = [["C++",2018],["C",2018],["Java",2019],["Python",2019],["SQL",2020],["Prolog",2020]];

function changecourselist(temp){
    var w = window[temp];
    var real = "<tr><th>Course code</th><th>Contents</th><th>Grade</th></tr>";
    for (var i=0;i<w.length;i++){
        var e = "";
        for (var j=0;j<w[i].length;j++){
            e += "<td>" + w[i][j] + "</td>";
        }
        real += "<tr>" + e + "</tr>";
    }
    //console.log(real);
    document.getElementById("coursetable").innerHTML = real;
}

function changeprogramlist(){
    var real = "<tr><th>Programming Language</th><th>Starting Year</th></tr>";
    for (var i=0;i<plang.length;i++){
        var e = "";
        for (var j=0;j<plang[i].length;j++){
            e += "<td>" + plang[i][j] + "</td>";
        }
        real += "<tr>" + e + "</tr>";
    }
    document.getElementById("programtable").innerHTML = real;
}

function initialize(){
    changecourselist("Y3S2");
    changeprogramlist();
}

function duelchange(){
    var x = document.getElementById("selectlist").value;
    //console.log(x);
    changecourselist(x);
}

window.onload = initialize;