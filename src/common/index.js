// token

export function getToken() {
    return sessionStorage.getItem('info')
}

export function clearToken() {
    return sessionStorage.removeItem('info')
}

// 设置导航栏
export function getNav() {
    const files = require.context('@/views/viewPage', false, /\.vue$/)
    const modules = []
    files.keys().forEach(key => {
        const path = key.replace(/\.\w+$/, '').replace(/\.\//, '')
        modules.push({
            name: path,
            path: '/MainPage/' + path
        })
    })
    return modules
}
