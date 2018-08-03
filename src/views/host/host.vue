<template>
  <div class="host">
    <div class="panel">
      <el-table :data="endpointList" style="width: 100%">
        <el-table-column prop="hostName" label="机器列表"></el-table-column>
        <el-table-column prop="remoteAddress"></el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button v-if="isEndpointLogin(scope.row)" size="mini" type="success"
                       @click="handleLoginClick(scope.row)">登录
            </el-button>
            <el-button v-else size="mini" type="danger">退出</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="host-content">
      <div class="filePath">
        <label style="font-size: 14px">当前路径：{{currentPath}}</label>
      </div>
      <div class="scriptExec">
        <div class="scriptExecHeader">
          <label style="font-size: 14px">输入脚本：{{currentPath}}</label>
          <div style="float: right; padding-bottom: 5px">
            <el-button @click="execute">执行</el-button>
          </div>
        </div>
        <el-input type="textarea" :rows="15" placeholder="请输入内容" v-model="script"></el-input>
        <div class="scriptExecHeader">
          <label style="font-size: 14px">执行结果：{{currentPath}}</label>
        </div>
        <el-input type="textarea" :rows="15" placeholder="请输入内容" v-model="executeResult"></el-input>
      </div>
    </div>
    <el-dialog title="登录" :visible.sync="dialogForm.dialogVisible" width="30%" :before-close="handleClose">
      <el-form :model="dialogForm">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="dialogForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input type="password" v-model="dialogForm.password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogForm.dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="login">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import axios from 'axios';
import hostApi from '../../service/api/hostApi';
import scriptApi from '../../service/api/scriptApi';
import hostService from '../../service/hostService';

export default {
  data() {
    return {
      dialogForm: {
        username: 'lizhiqiang',
        password: 'password',
        dialogVisible: false,
      },
      formLabelWidth: '100px',
      endpointList: [],
      selectedEndpointIp: '',
      currentPath: '',
      subDirectory: [],
      content: {},
      script: '',
      executeResult: '',
    };
  },
  methods: {
    handleLoginClick(row) {
      this.dialogForm.dialogVisible = true;
      this.selectedEndpointIp = row.ip;
      this.dialogForm.username = '';
      this.dialogForm.password = '';
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done();
        })
        .catch(() => {
        });
    },
    login() {
      axios.post(
        `http://192.168.68.254:8320/loginService/login/${this.selectedEndpointIp}`, {
          username: this.dialogForm.username,
          password: this.dialogForm.password,
        }, {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }).then((resp) => {
        const endpoint = hostService.getEndpointByIp(this.endpointList, this.selectedEndpointIp);
        endpoint.username = this.dialogForm.username;
        endpoint.token = resp.data.data;
        this.dialogForm.dialogVisible = false;

        axios.post(
          `http://192.168.68.254:8320/fileService/currentDirectory/${this.selectedEndpointIp}`, {
            token: endpoint.token,
          }, {
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          },
        ).then((resp2) => {
          const endpoint2 = hostService.getEndpointByIp(this.endpointList, this.selectedEndpointIp);
          endpoint2.currentPath = resp2.data.data;
          this.currentPath = endpoint2.currentPath;
        }).catch((err2) => {
          console.log(err2);
        });
        this.dialogForm.dialogVisible = false;
      }).catch((err) => {
        console.log(err);
      });
    },
    isEndpointLogin(row) {
      for (let i = 0; i < this.endpointList.length; i++) {
        const endpoint = this.endpointList[i];
        console.log(typeof (endpoint.token) !== 'undefined' && endpoint.token !== null && endpoint.token !== '');
        if (endpoint.ip === row.ip) {
          return typeof (endpoint.token) === 'undefined' || endpoint.token === null || endpoint.token !== '';
        }
      }
      return false;
    },
    execute() {
      scriptApi.execute(1, this.script, false).then((resp) => {
        if (resp.data.code !== 200) {
          this.$notify({
            title: '主机数据获取失败',
            message: '脚本执行失败',
            type: 'error',
          });
        }
        this.executeResult = resp.data.data.result;
      }).catch((err) => {
        console.log(err);
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
      this.endpointList = resp.data.data;
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
  width: 500px;
  min-height: 500px;
  border: solid 1px #a5c9f8;
  float: left;
  height: 100%;
}

.host .host-content {
  height: 100%;
  border: solid 1px #a5c9f8;
  margin-left: 510px;
}

.host .host-content .filePath {
  border-bottom: solid 2px #a5c9f8;
  padding-bottom: 8px;
  margin: 10px;
}

.host .host-content .scriptExec {
  margin: 10px;
}

.host .host-content .scriptExecHeader {
  padding: 10px;
}

.el-textarea textarea {
  background-color: #333333;
  color: #E8E8E8;
  border-radius: 0px;
}
</style>
