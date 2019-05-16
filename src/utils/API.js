import ajax from './ajax'
const UrlHead = 'https://tb.sweethaochen.cn:444'
const userLogin = (data)=>{
    return ajax(UrlHead+`/login`,'POST',data);
}
const sendUser = (data)=>{
    return ajax(UrlHead+`/setuserinfo`,'POST',data);
}
const getHome = ()=>{
    return ajax(UrlHead+`/gethomepage`,'GET');
}
const newProject = (data)=>{
    return ajax(UrlHead+`/createProject`,'POST',data);
}
const getState = (projectid)=>{
    return ajax(UrlHead+`/getprojectstate/${projectid}`,'GET');
}
const getparticipant = (projectid)=>{
    return ajax(UrlHead+`/getparticipant/${projectid}`,'GET');
}
const createWork = (data)=>{
    console.log(data)
    return ajax(UrlHead+`/creatework`,'POST',data);
}
const checkPeo = (projectid)=>{
    return ajax(UrlHead+`/getparticipant/${projectid}`);
}
const checkNotice = (projectid)=>{
    return ajax(UrlHead+`/getnotice/${projectid}`);
}
const createNotice = (projectid,data)=>{
    return ajax(UrlHead+`/addnotice/${projectid}`,'POST',data);
}
const deleteProject = (workid)=>{
    return ajax(UrlHead+`/deletework/${workid}`,'DELETE')
}
const moveToRush = (projectid)=>{
    return ajax(UrlHead+`/addrecycle/${projectid}`)
}
const getWork = (id)=>{
    return ajax(UrlHead+`/getworkdetail/${id}`)
}
const configFinish = (workid)=>{
    return ajax(UrlHead+`/finishwork/${workid}`)
}
const getUnreceived = ()=>{
    return ajax(UrlHead+`/getUnreceived`)
}
const getUnfinish = ()=>{
    return ajax(UrlHead+`/getUnfinished`)
}
const recieveWork = (data)=>{
    return ajax(UrlHead+`/receivework`,'GET',data)
}
const getTopMsg = ()=>{
    return ajax(UrlHead+`/getFirstUnreceived`,'GET')
}
const addAttention = (projectid)=>{
    return ajax(UrlHead+`/addAttention/${projectid}`,'GET')
}
const getRushList = ()=>{
    return ajax(UrlHead+`/getrecycle`)
}
export {
    userLogin,
    sendUser,
    getHome,
    newProject,
    getState,
    getparticipant,
    createWork,
    checkPeo,
    checkNotice,
    deleteProject,
    createNotice,
    moveToRush,
    getWork,
    configFinish,
    getUnreceived,
    recieveWork,
    getUnfinish,
    getTopMsg,
    addAttention,
    getRushList
}