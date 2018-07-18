<template>
  <div class="host">
    <div class="panel">
      <el-table :data="data" style="width: 100%">
        <el-table-column prop="hostName" label="机器列表"></el-table-column>
        <el-table-column prop="remoteAddress"></el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="handleLoginClick(scope.row)">登录</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="host-content">
      内容
    </div>
    <el-dialog title="登录" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form :model="dialogForm">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="dialogForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input type="password" v-model="dialogForm.password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import hostApi from '../../service/api/hostApi';

export default {
  data() {
    return {
      dialogForm: {
        username: 'lizhiqiang',
        password: '',
      },
      formLabelWidth: '50px',
      selectedHost: null,
      dialogVisible: false,
      data: [],
    };
  },
  methods: {
    handleLoginClick(row) {
      this.dialogVisible = true;
      this.selectedAddress = row;
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done();
        })
        .catch(() => {
        });
    },
  },
  mounted() {
    hostApi.endpoints().then((resp) => {
      if (resp.data.code !== 200) {
        this.$notify({
          title: '主机数据获取失败',
          message: resp.data.data.msg,
          type: 'error',
        });
      }
      this.data = resp.data.data;
    }).catch((err) => {
      console.log(err);
      this.$notify({
        title: '网络异常',
        message: '无法获取主机数据',
        type: 'error',
      });
    });
  },
};
</script>
<style>
.host {
  width: 100%;
  height: 100%;
}

.host .panel {
  width: 400px;
  min-height: 500px;
  border: solid 1px #a5c9f8;
  float: left;
  height: 100%;
}

.host .host-content {
  height: 100%;
  border: solid 1px #a5c9f8;
  margin-left: 410px;
}
</style>
