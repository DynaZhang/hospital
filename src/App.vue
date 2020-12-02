<template>
  <div id="app">
    <div class="print-btn">
      <el-button type="primary" @click="handlePrintPage">打印</el-button>
    </div>
    <div id="content">
      <el-row class="row" :gutter="32">
        <el-col :span="15">
          <basic-message />
        </el-col>
        <el-col :span="9">
          <opes-event />
        </el-col>
      </el-row>
      <el-row class="row">
        <entry />
      </el-row>
      <el-row class="row">
        <sign-coefficient />
      </el-row>
      <el-row class="row">
        <out-room />
      </el-row>
      <el-row class="row">
        <disease-observe />
      </el-row>
      <el-row class="row">
        <pacu-event />
      </el-row>
    </div>
  </div>
</template>

<script>
import BasicMessage from "@/components/BasicMessage";
import OpesEvent from "@/components/OpesEvent";
import DiseaseObserve from "@/components/DiseaseObserve";
import SignCoefficient from "@/components/SignCoefficient/Index";
import Entry from "@/components/Entry";
import OutRoom from "@/components/OutRoom";
import PacuEvent from "@/components/PacuEvent";
export default {
  name: 'App',
  components: {
    PacuEvent,
    OutRoom,
    Entry,
    DiseaseObserve,
    OpesEvent,
    BasicMessage,
    SignCoefficient
  },
  methods: {
    handlePrintPage() {
      window.print('#content')
    }
  }
}
</script>

<style>
#app {
  font-size: 12px;
  padding: 20px;
}
.row {
  margin-bottom: 20px;
}
</style>
