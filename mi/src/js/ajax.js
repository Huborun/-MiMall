//意义：获取满足条件的项目的个数
export async function getCorrespond(axios,url, name, value){
    let url_ = `${url}?${name}=${value}`
    let response = await axios.get(url_)
    let data = response.data
    return data.length
}

