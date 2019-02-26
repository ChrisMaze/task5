module.exports = function main(dis,time) {
    let result = 6;
    let addDis = dis-2;
   /* console.log("Debug Info");*/
    if(dis<0 || time<0)
    return "Invalid";
    if(addDis<0)
        addDis = 0;
    if(dis>2&&dis<=8)
        result=addDis*0.8+result;

        return Number.isInteger(result)?result:parseInt(result)+1;
};