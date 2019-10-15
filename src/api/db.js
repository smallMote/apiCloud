import Sha1 from 'sha1'
import Axios from 'axios';

const NOW = Date.now()
const config = {
	baseHost: 'https://d.apicloud.com/mcm/api',
	appId: 'A6025488616288',
	addKey: '66F96C1B-95B9-4ACD-6D40-DB4A85F0523A'
}

// 设置连接数据库的axios
const request = Axios.create({
	baseURL: config.baseHost,
	headers: {
		'X-APICloud-AppId': config.appId,
		'X-APICloud-AppKey': `${Sha1(`${config.appId}UZ${config.addKey}UZ${NOW}`)}.${NOW}`
	}
})

// 创建对象
export class DBConn {
	constructor() {
		this.request = request
	}
	// 初始化
	init(baseHost) {
		const orgHost = 'https://d.apicloud.com/mcm/api'
		config.baseHost =	orgHost + baseHost
	}
	// 创建一条记录
	create(data) {
		return this.request.post(config.baseHost, data)
	}
	// 删除一条记录
	delete(id) {
		return this.request.post(config.baseHost, { id, _method: 'DELETE'})
	}
	// 更新一条记录
	update(id, data) {
		return this.request(config.baseHost, {
			id,
			...data,
			_method: 'PUT'
		})
	}
	// 查询全表
	selectAll() {
		return this.request.get(config.baseHost)
	}
	// 根据id查询一条记录
	selectOne(id) {
		return this.request.get(config.baseHost, { id })
	}
}