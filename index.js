function  findOppositeNumber(n, inputNumber) {
    let oppsiteNumber;

    
    if(inputNumber<=(n/2)) {
        oppsiteNumber=inputNumber+(n/2);
    }
    else {
        oppsiteNumber=inputNumber-(n/2);
    }
    
    console.log(oppsiteNumber);

}

findOppositeNumber(10,4);
// Bai 2:
function merge2String(str1,str2) {
    let newstr="";
    if(str1.length>=str2.length) {
        for(let i=0;i<str2.length;i++) {
            newstr+=str1[i] + str2[i];
        }
        for(let j=str2.length;j<str1.length;j++) {
            newstr+=str1[j];
        }
    }
    else {
        for(let i=0;i<str1.length;i++) {
            newstr+=str1[i] + str2[i];
        }
        for(let j=str1.length;j<str2.length;j++) {
            newstr+=str2[j];
        }
    }
    console.log(newstr);
}
merge2String("abcd", "12345");

//Bai 3
let luckyNumber=1;
let inputNumber=document.querySelector(".inputnumber");
let btnSuccess=document.querySelector(".btnsucces");
let n=0;

btnSuccess.onclick=function() {
    if(inputNumber.value>10 || inputNumber.value <0 || inputNumber.value!=luckyNumber) {
        alert("Nhap lai ");
        inputNumber.value="";
        n++;
    }
    if(inputNumber.value==luckyNumber) {
       alert(`Chuc mung con so may man la ${inputNumber.value}`);
    }
    console.log(n);
    if(n==3) {
        alert(`Con so may man la ${luckyNumber}`);
        n=0;
    }
}

