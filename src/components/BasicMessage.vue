<template>
  <div class="basic-message">
    <div class="title">病人基本信息</div>
    <el-row class="row">
      <el-col :span="6">
        <div class="label">术后诊断: </div>
      </el-col>
      <el-col :span="18">
        <div class="value"></div>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="6">
        <div class="label">手术名称: </div>
      </el-col>
      <el-col :span="18">
        <div class="value"></div>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="12">
        <el-row>
          <el-col :span="8">
            <div class="label">麻醉方式: </div>
          </el-col>
          <el-col :span="16">
            <div class="value"></div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="8">
            <div class="label">ASA: </div>
          </el-col>
          <el-col :span="16">
            <div class="value"></div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="12">
        <el-row>
          <el-col :span="8">
            <div class="label">转入时间: </div>
          </el-col>
          <el-col :span="16">
            <div class="value"></div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="8">
            <div class="label">转出时间: </div>
          </el-col>
          <el-col :span="16">
            <div class="value"></div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="6">
        <div class="label">转至：</div>
      </el-col>
      <el-col :span="18">
        <div class="label no-border">
          <el-radio-group style="width: 100%;" v-model="changeTo">
            <el-col :span="6">
              <el-radio disabled :label="0">病房</el-radio>
            </el-col>
            <el-col :span="6">
              <el-radio disabled :label="1">ICU</el-radio>
            </el-col>
            <el-col :span="12">
              <el-row class="value no-border">
                <el-col :span="8">
                  <el-radio disabled :label="2">其他</el-radio>
                </el-col>
                <el-col :span="16">
                  <div class="value"></div>
                </el-col>
              </el-row>
            </el-col>
          </el-radio-group>
        </div>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="8">
        <el-col :span="14">
          <div class="label">实施麻醉医师: </div>
        </el-col>
        <el-col :span="10"></el-col>
      </el-col>
      <el-col :span="8">
        <el-col :span="12">
          <div class="label">PCAU医生: </div>
        </el-col>
        <el-col :span="12"></el-col>
      </el-col>
      <el-col :span="8">
        <el-col :span="12">
          <div class="label">PCAU护士: </div>
        </el-col>
        <el-col :span="12"></el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getOPSDetail} from "@/apis";

export default {
  name: "BasicMessage",
  data() {
    return {
      detail: {

      },
      changeTo: ''
    }
  },
  mounted() {
    getOPSDetail().then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error);
      this.$message.error('请求错误')
    })
  }
}
</script>

<style scoped>
.title {
  height: 24px;
  line-height: 24px;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}
.row {
  margin-bottom: 20px;
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
.no-border {
  border-bottom: none;
}
</style>
