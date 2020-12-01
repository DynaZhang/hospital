<template>
  <div id="app">
    <el-row :gutter="32">
      <el-col :span="15">
        <basic-message />
      </el-col>
      <el-col :span="9">
        <opes-event />
      </el-col>
    </el-row>
    <el-row :gutter="32">
      <el-col :span="12">
        <pulse />
      </el-col>
      <el-col :span="12">
        <temperature />
      </el-col>
    </el-row>
    <el-row :gutter="32">
      <el-col :span="12">
        <SPO2 />
      </el-col>
      <el-col :span="12">
        <oxygen />
      </el-col>
    </el-row>
    <el-row :gutter="32">
      <el-col :span="15">
        <disease-observe />
      </el-col>
      <el-col :span="9">
        <opes-event />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BasicMessage from "@/components/BasicMessage";
import OpesEvent from "@/components/OpesEvent";
import Pulse from "@/components/SignCoefficient/Pulse";
import Temperature from "@/components/SignCoefficient/Temperature";
import SPO2 from "@/components/SignCoefficient/SPO2";
import Oxygen from "@/components/SignCoefficient/Oxygen";
import DiseaseObserve from "@/components/DiseaseObserve";
export default {
  name: 'App',
  components: {
    DiseaseObserve,
    Oxygen,
    SPO2,
    Temperature,
    Pulse,
    OpesEvent,
    BasicMessage
  }
}
</script>

<style>
#app {
  font-size: 14px;
}
</style>
