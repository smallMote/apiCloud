import { DBConn } from '../db'

export class PoeBean {
	constructor(title, author, content, like, idea) {
		this.like = like
		this.idea = idea
		this.title = title
		this.author = author
		this.content = content
	}
}

export class PoeService extends DBConn {
	constructor() {
		super()
		this.init('/t_poe')
	}
	// 添加
	addPoe (poe) {
		return this.create({ ...poe })
	}
	// 更新
	updatePoe (id, poe) {
		return this.updatePoe(id, { ...poe })
	}
	// 删除
	deletePoe (id) {
		// waiting
	}
}