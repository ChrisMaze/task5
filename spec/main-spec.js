const main = require('../main/main');

describe('出租车计价测试', function () {
    it("距离或时间不合法（小于0）时，返回Invalid",function(){
        let delayTime = 3;
        let dis=-1;
        let time=-1;
        let result=main(dis,time,delayTime);
        expect(result).toEqual("Invalid");
        });
    it('两公里以内收起步价6元', function () {
        let delayTime = 3;
        let dis=1;
        let time=5;
        let result=main(dis,time,delayTime);
        expect(result).toEqual(7);
    });
    it('dis大于两公里且小于八公里', function () {
        let delayTime = 3;
        let dis=7;
        let time=5;
        let result=main(dis,time,delayTime);
        expect(result).toEqual(11);
    });
    it('dis大于八公里', function () {
        let delayTime = 0;
        let dis=10;
        let time=5;
        let result=main(dis,time,delayTime);
        expect(result).toEqual(14);
    });
    it('停车等待时3分钟', function () {
        let delayTime = 3;
        let dis=10;
        let time=5;
        let result=main(dis,time,delayTime);
        expect(result).toEqual(14);
    });
});
