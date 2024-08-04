<template>
    <div>
        <el-container style="height: 700px; border: 1px solid #eee">
            <el-header style="font-size:40px;background-color: rgb(238, 241, 246);">学习系统</el-header>
            <el-container>
                <el-aside width="230px" style="border: 1px solid #eee;">
                    <el-menu :default-openeds="['1', '3']">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>系统信息管理</template>
                            <el-menu-item index="1-1">
                                <router-link to="/about">部门管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <router-link to="/emp">员工管理</router-link>
                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <el-form :inline="true" :model="searchform" class="demo-form-inline">
                        <el-form-item label="姓名">
                            <el-input v-model="searchform.name" placeholder="姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-select v-model="searchform.gender" placeholder="性别">
                                <el-option label="男" value="1"></el-option>
                                <el-option label="女" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-date-picker v-model="searchform.entrydate" type="daterange" range-separator="至"
                                start-placeholder="开始日期" end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">查询</el-button>
                        </el-form-item>
                    </el-form>
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="name" label="姓名" width="180">
                        </el-table-column>
                        <el-table-column label="图像" width="180">
                            <template slot-scope="scope">
                                <img :src="scope.row.image" width="100">
                            </template>
                        </el-table-column>
                        <el-table-column label="性别">
                            <template slot-scope="scope">
                                {{ scope.row.gender == 1 ? "男" : "女" }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="job" label="职业">
                        </el-table-column>
                        <el-table-column prop="entryTime" label="入职时间">
                        </el-table-column>
                        <el-table-column prop="updateTime" label="最后操作时间">
                        </el-table-column>
                        <el-table-column label="操作">
                            <el-button type="text" size="small">编辑</el-button>
                            <el-button type="text" size="small">删除</el-button>
                        </el-table-column>
                    </el-table>
                    <el-pagination background layout="total,sizes, prev, pager, next, jumper"
                        @size-change="handleSizeChange" @current-change="handleCurrentchange"
                        :total="1000"></el-pagination><br><br>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            tableData: [],
            searchform: {
                name: "",
                gender: "",
                entrydate: []
            }
        }
    },
    methods: {
        onSubmit() {
            alert("查询条件：" + JSON.stringify(this.searchform));
        },
        handleSizeChange: function (val) {
            alert("每页记录数变化" + val);
        },
        handleCurrentChange: function (val) {
            alert("页码发生变化" + val)
        }
    },
    mounted() {
        axios.get("abc.json").then(result => {
            this.tableData = result.data.data;

        })
    }
}
</script>

<style></style>