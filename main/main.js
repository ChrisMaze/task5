module.exports = function main(dis,time) {
    let result = 6;
    let add2Dis = dis - 2;
    let add8Dis = dis - 8;
    /* console.log("Debug Info");*/
    if(dis<0 || time<0)
    return "Invalid";
    if(add2Dis<0)
        add2Dis = 0;
    result += add2Dis*0.8;
    if (add8Dis>0)
        result += add8Dis*0.4;
    return Number.isInteger(result)?result:parseInt(result)+1;

};