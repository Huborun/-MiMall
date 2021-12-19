export default function getIndex(cartList,itemId) {
    let result = -1;
    cartList.forEach((item,index)=>{
        if(item.ItemId == itemId){
            result = index
        }
    })
    return result;
}