// 封装本地存储
// 设置存储值
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
// 取出存储值
export const getItem = (value) => {
  const data = window.localStorage.getItem(value)
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}
// 移除存储值
export const removeItem = (value) => {
  window.localStorage.removeItem(value)
}
