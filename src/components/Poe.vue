<template>
  <div class="poe">
    <form action="">
      <label>
        <input type="text" v-model="poe.title"/>
      </label>
    </form>
    <button 
      @click="addPoe"
      class="btn">保存</button>
  </div>
</template>
<script>
import { PoeBean, PoeService } from '../api/poe/poe'
const poeService = new PoeService()
export default {
  data () {
    return {
      // title, author, content, like, idea
      poe: {
        title: '测试',
        author: 'yang',
        content: '测试文本',
        like: 0,
        idea: 0
      }
    }
  },
  methods: {
    async addPoe () {
      const poe = new PoeBean(...Object.values(this.poe))
      const result = await poeService.addPoe(poe)
      console.log(result)
    }
  }
}
</script>
<style scoped>
.btn {
  padding: 3px 6px;
  border: 1px solid gray;
  background: none;
}
</style>