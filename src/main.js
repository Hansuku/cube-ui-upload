import Upload from './package/upload.vue'
import UploadBtn from './package/btn.vue'
import UploadFile from './package/file.vue'

Upload.install = function (Vue) {
  Vue.component(Upload.name, Upload)
  Vue.component(UploadBtn.name, UploadBtn)
  Vue.component(UploadFile.name, UploadFile)
}

Upload.Btn = UploadBtn
Upload.File = UploadFile

export default Upload
