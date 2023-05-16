class result {
  code: number;
  msg: string;
  data: object;
  async SUCCESS() {
    this.code = 200;
    this.msg = '执行成功';
    this.data = {};
  }
  async SUCCESSNEEDMSG(msg: string) {
    this.code = 200;
    this.msg = msg;
    this.data = {};
  }
  async SUCCESSNEEDDATA(data: object, msg: string) {
    console.log('data',data);
    
    this.code = 200;
    this.msg = msg;
    this.data = data;
  }
  async ERROR(data: object) {
    this.code = 500;
    this.msg = '执行失败';
    this.data = data;
  }
  async ERRORNEEDMSG(msg: string) {
    this.code = 500;
    this.msg = msg;
    this.data = {};
  }
  async ERRORBYCODE(code: number, data: object) {
    this.code = 500
    this.msg = '执行失败';
    this.data = data;
    if (code == 50001) {
      this.msg = '登录失败，该账户没有权限！';
      this.data = data
    }
    else if (code == 50002) {
      this.msg = '数据库连接出错！'
    }
    else if (code == 50003) {
      this.msg = '组装数据出现错误！'
    }
    else if (code == 50004) {
      this.msg = '該月数据已生成，請刪除後再新增！'
    }
    else if (code == 50005) {
      this.msg = ''
    }
    else if (code == 50006) {
      this.msg = ''
    }
    else if (code == 50007) {
      this.msg = ''
    }
    else if (code == 50008) {
      this.msg = ''
    }
    this.code = 500;

    this.data = data;
  }
}
export default result
