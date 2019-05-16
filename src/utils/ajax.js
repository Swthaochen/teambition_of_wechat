const ajax = function(url,methods='GET',data={},headers = {'Content-Type': 'application/json'}){
    return new Promise((resolve,reject)=>{
        var cookies = wx.getStorageSync('cookie')  
        if(methods == 'POST'){
            headers = {'Content-Type': 'application/x-www-form-urlencoded'}
            if(url == 'https://tb.sweethaochen.cn:444/createProject' || url == 'https://tb.sweethaochen.cn:444/creatework'){
                headers = {'Content-Type': 'application/json'}
            }
        }
        if(cookies != ''){
            //已经得到了
            headers['cookie'] = cookies
        }
        wx.request({
            url: url, 
            method:methods,
            data: data,
            header:headers,
            success (res) {
                if(res.statusCode == 200){
                    resolve(res)
                }else{
                    reject(res)
                }
            },
            fail(err){
                reject(err)
            }
        })
    })
}
export default ajax