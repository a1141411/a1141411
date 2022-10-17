export const isPathPartlyExisted = (path) => {
    const arr = ['/cities', '/homedetail'];
    let pathRes = path.split('/')
    if (pathRes[1] && arr.indexOf(`/${pathRes[1]}`) != -1) return true
    return false
}