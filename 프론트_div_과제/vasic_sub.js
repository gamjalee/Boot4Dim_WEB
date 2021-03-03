let N=Number(prompt("N을 입력하세요."));
let M=Number(prompt("M을 입력하세요."));
let num=0;
let mul=0;
let result_sub=0;

document.write("<table>");

for(let i=0;i<N;i++){
    document.write("<tr>");
    for(let j=0;j<M;j++){
        document.write("<td>"+num+"<td>");
        num++;
        summ+=num;
    }
    document.write("<tr>");
}

document.write("<table>");

let rand=Math.floor((Math.random()*(N*M-1)+1));
//https://dasima.xyz/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-math-random-%EB%B2%94%EC%9C%84-%EC%9E%90%EB%A6%BF%EC%88%98/

result_sub=summ-rand;

document.getElementById("data").innerHTML=result_sub;