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
如果代码里之前写了`cube-upload`标签，基本不用修改，只需要添加一个`:httpRequest`属性即可
```
<cube-upload
  v-model="files"
  :action="action"
  :max="max"
  :simultaneousUploads="9"
  :auto="false"
  :httpRequest="customUploadReq"
  @files-added="filesAdded"
  @file-submitted="fileSubmitted"
  @file-removed="fileRemoved"
  @file-success="fileSuccess"
  @file-error="fileError"
  @file-click="fileClick"
></cube-upload>
```
`:httpRequest`接收一个 `promise` 回调，在你自己的上传逻辑处理完了以后 resolve 他即可。
```
uploadRequestMinio (file) {
  return new Promise((resolve, reject) => {
    fetch(res.url, {
      method: 'PUT',
      body: file.file
    }).then(_ => {
      resolve(file)
    })
  })
}
```