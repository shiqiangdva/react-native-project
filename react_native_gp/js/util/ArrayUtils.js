export default class ArrayUtils{
    /**
     * 更新数据,若item已经存在,则从数组中将它移除,否则添加进数组
     */
    static updataArray(array, item) {
        for (let i = 0, len = array.length; i < len; i++) {
            let temp = array[i];
            if(temp === item) {
                array.splice(i,1);
                return;
            }
        }
        array.push(item);
    }
}