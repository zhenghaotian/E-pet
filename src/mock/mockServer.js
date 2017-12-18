import Mock from 'mockjs'
import data from './data.json'
import classify from './classify.json'
import brand from './brand.json'

// 通过mockjs向外暴露3个接口
Mock.mock('/api/home', data.header)
Mock.mock('/api/catFood', data.catFood)
Mock.mock('/api/classify', classify.categorys)
Mock.mock('/api/brand', brand.brands)

// 当前模块只需要被执行一次, 接口就可以访问了
console.log('执行mockServer...')
