<template>
  <div class="pacu-vent">
    <div class="title">PACU出入量情况</div>
    <div class="content">
      <div class="item">
        <div class="sub-title">液体入量</div>
        <el-row :gutter="16">
          <el-col :span="4">
            <el-row class="row">
              <el-col :span="10">
                <div class="label">RBC: </div>
              </el-col>
              <el-col :span="14">
                <div class="value">
                  <span class="after-fix">ml</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row class="row">
              <el-col :span="10">
                <div class="label">血浆: </div>
              </el-col>
              <el-col :span="14">
                <div class="value">
                  <span class="after-fix">ml</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row class="row">
              <el-col :span="10">
                <div class="label">胶体: </div>
              </el-col>
              <el-col :span="14">
                <div class="value">
                  <span class="after-fix">ml</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row class="row">
              <el-col :span="10">
                <div class="label">晶体: </div>
              </el-col>
              <el-col :span="14">
                <div class="value">
                  <span class="after-fix">ml</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row class="row">
              <el-col :span="10">
                <div class="label">总量: </div>
              </el-col>
              <el-col :span="14">
                <div class="value">
                  <span class="after-fix">ml</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="item">
        <div class="sub-title">出量</div>
        <el-row :gutter="16">
          <el-col :span="4">
            <el-row class="row">
              <el-col :span="10">
                <div class="label">出血量: </div>
              </el-col>
              <el-col :span="14">
                <div class="value">
                  <span class="after-fix">ml</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row class="row">
              <el-col :span="10">
                <div class="label">尿量: </div>
              </el-col>
              <el-col :span="14">
                <div class="value">
                  <span class="after-fix">ml</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row class="row">
              <el-col :span="10">
                <div class="label">其他: </div>
              </el-col>
              <el-col :span="14">
                <div class="value">
                  <span class="after-fix">ml</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row class="row">
              <el-col :span="10">
                <div class="label">总量: </div>
              </el-col>
              <el-col :span="14">
                <div class="value">
                  <span class="after-fix">ml</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PacuEvent',
  data() {
    return {}
  }
}
</script>

<style scoped>
.title {
  height: 24px;
  line-height: 24px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}
.sub-title {
  height: 18px;
  line-height: 18px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
}
.row {
  margin-bottom: 10px;
}
.label {
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.value {
  height: 20px;
  line-height: 20px;
  border-bottom: 1px solid #000000;
}
.after-fix {
  float: right;
}
</style>
