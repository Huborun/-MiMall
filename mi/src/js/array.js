import {getCorrespond} from "./ajax"

//作用：返回一个由商品列表组成的二维数组
export async function getDimensionalArray(axios,url,category){
    var array = new Array(category.length+1);
    axios.get(url).then(async(response) => {

        //有两种可能
        //第一种：第一列只有一张大图
        //设置：最先的ItemId != 0
        if(response.data[0].ItemId != 0){
            array[0] = new Array(1)
            array[0][0] = response.data[0]
        }else{
            //第二种可能：第一列二张大图
            // 设置：最先的ItemId == 0
            array[0] = new Array(2)
            array[0][0] = response.data[0]
            array[0][1] = response.data[1]
        }
        for(let i = 1 ; i < array.length ; i++){
            let j = await getCorrespond(axios,url,"category",category[i-1])
            //制作空的二维数组
            array[i] = new Array(j)
            let index = 0;
            //填充元素
            for(let k = 0;k<response.data.length;k++){
                if(category[i-1] == response.data[k].category){
                    array[i][index] = response.data[k]
                    index++
                }
            }
            index = 0
        }
    })
    return array
}