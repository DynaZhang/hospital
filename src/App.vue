<template>
  <div id="app">
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
      <el-row class="row">
        <resume-medical />
      </el-row>
      <el-row class="row">
        <sign />
      </el-row>
    </div>
  </div>
</template>

<script>
import BasicMessage from "@/components/BasicMessage";
import OpesEvent from "@/components/OpesEvent";
import DiseaseObserve from "@/components/DiseaseObserve";
import SignCoefficient from "@/components/SignCoefficient";
import Entry from "@/components/Entry";
import OutRoom from "@/components/OutRoom";
import PacuEvent from "@/components/PacuEvent";
import ResumeMedical from "@/components/ResumeMedical";
import Sign from "@/components/Sign";
export default {
  name: 'App',
  components: {
    Sign,
    ResumeMedical,
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
  margin-bottom: 35px;
}
</style>
