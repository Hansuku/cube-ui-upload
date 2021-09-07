# cube-ui-upload

> cube-ui@1.12.46 的上传组件（Upload）修改版，能够传入 httpRequest 覆盖默认上传行为。

*可以使用此组件替代 cubeui 的 upload，理论上对现有代码不造成任何影响。*

### 安装
```
npm i cube-ui-upload -S
```
在你的项目主入口（如`main.js`）中注入，如果是全局引入，需要在`cube-ui`声明后use
```
import Vue from 'vue'
import App from './App'

import Cube from 'cube-ui'
import CubeUiUpload from 'cube-ui-upload'

// 注意 use 顺序
Vue.use(Cube)
Vue.use(CubeUiUpload)

new Vue({
  el: '#app',
  components: { App },
})
```
### 使用
```

```