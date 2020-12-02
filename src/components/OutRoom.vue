<template>
  <div class="out-room">
    <div class="title">出室情况</div>
    <el-row class="row">
      <el-col :span="12">
        <el-col :span="8">
          <div class="label">Steward评分:</div>
        </el-col>
        <el-col :span="16">
          <div class="value">
            <span class="after-fix">分（>4分方可离开PACU，评分标准同上。）</span>
          </div>
        </el-col>
      </el-col>
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
              <span class="after-fix">155次/分</span>
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
  name: 'OutRoom',
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
