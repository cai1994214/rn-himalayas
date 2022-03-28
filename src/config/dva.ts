import {create} from 'dva-core-ts';
import createLoading from 'dva-loading-ts';
import models from '@/modules/index';
//1.创建dva实例
const app = create();
//2.加载model对象
models.forEach(model => app.model(model));
app.use(createLoading());
//3.启动dva后，可以在model中使用app.model
app.start();
//4.导出dva数据
export default app._store;
