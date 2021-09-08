//token

export function getToken() {
    return sessionStorage.getItem('info')
}
export function clearToken() {
    return sessionStorage.removeItem('info')
}

// 设置导航栏
export function getNav() {
    const files = require.context('@/views/viewPage', false, /\.vue$/)
    let modules = []
    files.keys().forEach(key => {
        let path=key.replace(/\.\w+$/, '').replace(/\.\//, '')
        modules.push({
            name:path,
            path:'/MainPage/'+path
        })
    })
    return modules
}