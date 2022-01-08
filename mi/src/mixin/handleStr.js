export const handle = {
    methods: {
        isStrAName(str) {
            //判断字符串是否符合姓名的要求
            //姓名：汉字或字母组成，长度2-20
            let flag = 0
            //判断是否包含中文
            var patrn = /^[a-zA-Z\u4E00-\u9FA5]*$/;
            if (!patrn.exec(str)) {
                //不符合规则
                flag = 2;
            } else {
                //符合规则
                flag = 1
            }

            if (flag == 1) {
                if (str.length > 1 && str.length < 21) {
                    //长度合格
                    return 1
                } else {
                    //长度不合格
                    return 3
                }
            } else {
                //不包含中文也不包含英文
                return 2
            }
        },
        isPhone(str) {
            //判断字符串是否符合手机号码的要求
            if (
                str.length == 11 &&
                /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|)+\d{8})$/.test(
                    str
                )
            ) {
                //符合规则
                return 1
            } else {
                //不符合规则
                return 2
            }
        },
        getDifferentArr(array, obj) {
            //作用：过滤数组中的重复的字符串
            let result = []
            array.forEach((item) => {
                if (result.length == 0) {
                    result.push(item[obj])
                } else {
                    if (result.indexOf(item[obj]) == -1) {
                        //不存在这个字符串
                        result.push(item[obj])
                    }
                }
            })
            return result
        },
        getTime() {
            //获取当前时间
            var myDate = new Date();
            var year = myDate.getFullYear();
            var month = myDate.getMonth();
            var date = myDate.getDate();
            month = month + 1
            var hours = myDate.getHours();
            var minutes = myDate.getMinutes();
            var seconds = myDate.getSeconds();

            let str = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
            return str
        },
        transformTime(str){
            //将日期转换成需要的格式
            let time = str.split("T")
            let dateArray = time[0].split("-")
            time[1] = time[1].substring(0,8)
            let timeArray = time[1].split(":")
            let year = dateArray[0]
            let month = dateArray[1]
            let day = dateArray[2]

            let hour = parseInt(timeArray[0])
            hour = (hour + 8)>24 ? (hour-16) : (hour + 8)
            if(hour < 10){
                hour = "0" + hour
            }
            let minute = timeArray[1]

            let date = `${year}年${month}月${day}日 ${hour}:${minute}`
            return date
        },
        getOrderId(array){
            //从数组中获取不同的OrderId
            let array2 = new Array();
            array.forEach((item) => {
                if(array2.indexOf(item.orderid)==-1){
                    array2.push(item.orderid)
                }
            })
            return array2
        }
    }
}