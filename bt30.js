let arrNum = [4, 0, 1, -2, 3];
let b=0;
let i = 0;
let c=arrNum.length;
let d = [];
switch ((i < 0) && (i > 4)) {
    case 0:
        arrNum[0] = 4;
    case 1:
        arrNum[1] = 0;
    case 2:
        arrNum[2] = 1;
    case 3:
        arrNum[3] = -2;
    case 4:
        arrNum[4] = 3;
        break;
    default:
        arrNum[-1] = 0;
        arrNum[5] = 0;
        break;
}
for (i = 0; i < c; i++) {
    b += arrNum[i - 1] + arrNum[i] + arrNum[i + 1];
    d.push(b);
    b = 0;
}
console.log(d);