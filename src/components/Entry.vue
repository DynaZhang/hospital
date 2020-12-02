<template>
  <div class="entry">
    <div class="title">入室情况</div>
    <el-row class="row">
      <el-col :span="12">
        <el-col :span="8">
          <div class="label">Steward评分:</div>
        </el-col>
        <el-col :span="16">
          <div class="value"></div>
        </el-col>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-row>
        <el-col :span="4">
          <div class="label">清醒程度:</div>
        </el-col>
        <el-col :span="20">
          <el-radio-group v-model="awake">
            <el-radio :label="2" disabled>1.完全清醒(2分)</el-radio>
            <el-radio :label="1" disabled>2.对刺激有反应(1分)</el-radio>
            <el-radio :label="0" disabled>3.对刺激无反应(0分)</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="row">
      <el-row>
        <el-col :span="4">
          <div class="label">呼吸道通畅程度:</div>
        </el-col>
        <el-col :span="20">
          <el-radio-group v-model="pass">
            <el-radio :label="2" disabled>1.可按医生吩咐咳嗽(2分)</el-radio>
            <el-radio :label="1" disabled>2.可自主维持呼吸道通畅(1分)</el-radio>
            <el-radio :label="0" disabled>3.呼吸道需予支持(0分)</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="row">
      <el-row>
        <el-col :span="4">
          <div class="label">肢体活动度:</div>
        </el-col>
        <el-col :span="20">
          <el-radio-group v-model="pass">
            <el-radio :label="2" disabled>1.肢体有意识的活动(2分)</el-radio>
            <el-radio :label="1" disabled>2.肢体无意识活动(1分)</el-radio>
            <el-radio :label="0" disabled>3.肢体无活动(0分)</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="row" :gutter="16">
      <el-col :span="4">
        <el-row>
          <el-col :span="12">
            <div class="label">BP:</div>
          </el-col>
          <el-col :span="12">
            <div class="value">
              <span class="after-fix">ml</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-col :span="12">
            <div class="label">HR:</div>
          </el-col>
          <el-col :span="12">
            <div class="value">
              <span class="after-fix">次/分</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-col :span="12">
            <div class="label">R:</div>
          </el-col>
          <el-col :span="12">
            <div class="value">
              <span class="after-fix">次/分</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-col :span="12">
            <div class="label">SPO2:</div>
          </el-col>
          <el-col :span="12">
            <div class="value">
              <span class="after-fix">%</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-col :span="12">
            <div class="label">T:</div>
          </el-col>
          <el-col :span="12">
            <div class="value">
              <span class="after-fix">℃</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="row" :gutter="16">
      <el-col :span="4">
        <el-row>
          <el-col :span="12">
            <div class="label">瞳孔:</div>
          </el-col>
          <el-col :span="12">
            <div class="value">
              <span class="after-fix">mm</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-col :span="12">
            <div class="label">等大:</div>
          </el-col>
          <el-col :span="12">
            <div class="value"></div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-col :span="12">
            <div class="label">其他:</div>
          </el-col>
          <el-col :span="12">
            <div class="value"></div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Entry',
  data() {
    return {
      awake: '',
      pass: ''
    }
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
.after-fix {
  float: right;
}
</style>
