import Mock from 'mockjs'
import data from './data.json'

// 通过mockjs向外暴露3个接口
Mock.mock('/api/home', data.header)
Mock.mock('/api/catFood', data.catFood)

// 当前模块只需要被执行一次, 接口就可以访问了
console.log('执行mockServer...')
