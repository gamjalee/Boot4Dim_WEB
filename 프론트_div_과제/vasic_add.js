//vanilaJS + basic = vasic ^0^ 멋지다
//참고: https://medium.com/duckuism/javascript%EB%A1%9C-%EC%9D%B4%EB%B2%88-%EB%8B%AC-%EB%8B%AC%EB%A0%A5-%EB%A7%8C%EB%93%A4%EA%B8%B0-1dff5f317459
//참고 2: https://m.blog.naver.com/PostView.nhn?blogId=1992wjddhr&logNo=220680688022&proxyReferer=https:%2F%2Fwww.google.com%2F

/*let result_add = 0;

const N=document.querySelector('number N');
const M=document.querySelector('number M');

}*/

let N=Number(prompt("N을 입력하세요."));
let M=Number(prompt("M을 입력하세요."));
let num=0;
let summ=0;
let result_add=0;

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

result_add=summ+rand;

document.getElementById("data").innerHTML=result_add;