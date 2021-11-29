const fs = `11`
const N = Number(fs);

const sLengthList = [];

 //첫 번째 수열의 길이 삽입
sLengthList.push(3);

 //N번째 글자를 가지는 수열 S(n)이 나올 때까지 수열의 길이 저장
while(N > sLengthList[sLengthList.length-1]) {
  sLengthList.push(2 * sLengthList[sLengthList.length-1] + sLengthList.length + 3);
}

let n = N;
for(let i = sLengthList.length - 1; i >= 0; i --) {
     //이전 수열의 길이, i가 0일 때 이전 수열 없으므로 그때 0을 저장
    const prevSLength = (sLengthList[i-1] || 0);

     //S(n)=S(n-1)+'m'+'o'*(n+2)+S(n-1)
    if (n === prevSLength + 1) {
       //S(n-1) 뒤의 m일 때       
        console.log('m');
        break;
    } else if(n > prevSLength + 1 && n <= prevSLength + (i + 3)) {
       //S(n-1) 앞의 o 중 하나일 때  
        console.log('o')
        break;
    } else if(n > prevSLength + (i + 3)) {
       //뒤의 S(n-1)일 때
       //이전 수열에서 n번째 글짜를 파악하기 위해 n 업데이트
        n -= prevSLength + (i + 3);
    }
}
