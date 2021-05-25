function setOutput(number){
    document.getElementById("output").value += number;
}

function cal(){
    let input = document.getElementById("output").value;
    // hàm eval tính toán biểu thức chuỗi
    result=eval(input);

    document.getElementById('output').value = result;
   
}

function clearAll(){
    document.getElementById("output").value ="";
}

function del(){
    let del=document.getElementById("output").value.substr(0,document.getElementById("output").value.length-1);
    document.getElementById("output").value = del;
}

