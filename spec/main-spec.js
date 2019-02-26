const main = require('../main/main');

describe('出租车计价测试', function () {
    it("距离或时间不合法（小于0）时，返回Invalid",function(){
        let dis=-1;
        let time=-1;
        let result=main(dis,time);
        expect(result).toEqual("Invalid");
        });
    it('两公里以内收起步价6元', function () {
        let dis=1;
        let time=5;
        let result=main(dis,time);
        expect(result).toEqual(6);
    });
    it('dis大于两公里且小于八公里', function () {
        let dis=7;
        let time=5;
        let result=main(dis,time);
        expect(result).toEqual(10);
    });
    it('dis大于八公里', function () {
        let dis=10;
        let time=5;
        let result=main(dis,time);
        expect(result).toEqual(14);
    });
});
