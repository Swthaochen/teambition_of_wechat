import promisify from './promisify'


export const scanCode = async ()=>{
    return promisify(wx.scanCode)()
}
export const authorizeConfig = async ()=>{
    return promisify(wx.getSetting)()
}
export const save = async (filepPath)=>{
    return promisify(wx.saveFile)({tempFilePath:filepPath,})
}

export const getSetting = async ()=>{
    return promisify(wx.getSetting)()
}
export const jumpTo = (url)=>{
    wx.navigateTo({
        url: url
    })
}
export const switchTab = (url)=>{
    wx.switchTab({
        url:url
    })
}
// config是对wx.chooseImage的相关参数配置，详见微信小程序官方文档
export const chooseImage = (config)=>{
    return promisify(wx.chooseImage)(config)
}

// config是对wx.chooseImage的相关参数配置，详见微信小程序官方文档
export const getUserInfo = ()=>{
    return promisify(wx.getUserInfo)()
}
// config是对wx.chooseImage的相关参数配置，详见微信小程序官方文档
export const WXLogin = ()=>{
    return promisify(wx.login)()
}

export const showModal = (config)=>{
    return promisify(wx.showModal)(config)
}

export const uploadFile = (config)=>{
    return promisify(wx.uploadFile)(config)
}

export const showToast = (title = '提示', icon = 'none', duration = 1500)=>{
    wx.showToast ({
      title,
      icon,
      duration,
    });
}