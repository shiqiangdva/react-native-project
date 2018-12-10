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

    /***
     * 克隆一个数组
     * @param form
     * @returns {Array}
     */
    static clone(form) {
        if (!form) return [];
        let newArray=[];
        for (let i = 0, len = form.length; i < len; i++) {
            newArray[i] = form[i];
        }
        return newArray;
    }

    /***
     * 判断两个数组元素是否相等
     * @param arr1
     * @param arr2
     * @returns {boolean}
     */
    static isEqual(arr1, arr2) {
        if (!(arr1&&arr2)) return false;
        if (arr1.length !== arr2.length) return false;
        for (let i = 0, l = arr2.length; i < l; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

}