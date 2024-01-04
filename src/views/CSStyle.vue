<template>
  <div class="container">
    <div class="top">
      <div class="nav-text">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#8daac9"
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-menu-item index="0">
            <img
              style="width: 100px"
              src="https://element-plus.gitee.io/images/element-plus-logo.svg"
              alt="Element logo"
            />
          </el-menu-item>
          <div class="flex-grow" />
          <el-sub-menu index="1">
            <template #title>Cobalt Strike</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>View</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>Attacks</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>Reporting</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>Help</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="6">
            <template #title>AboutMe</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
      <div class="nav-ico">
        <el-icon
          v-for="item in icons"
          :class="'nav-icon iconfont ' + item.icon"
          :key="item.icon"
          :size="16"
        ></el-icon>
      </div>
      <div class="host-content">
        <el-table
          :data="tableData"
          :height="tableHeight + 'px'"
          style="width: 100%"
        >
          <el-table-column type="index" width="50" />
          <el-table-column prop="date" label="external" width="100" />
          <el-table-column prop="name" label="internal" width="100" />
          <el-table-column prop="name" label="listener" width="90" />
          <el-table-column prop="name" label="user" width="120" />
          <el-table-column prop="name" label="computer" width="150" />
          <el-table-column prop="name" label="note" width="140" />
          <el-table-column prop="name" label="process" width="100" />
          <el-table-column prop="name" label="pid" width="90" />
          <el-table-column prop="name" label="arch" width="100" />
          <el-table-column prop="address" label="last" />
        </el-table>
      </div>
    </div>
    <div class="bottom">
      <div class="resize-handle" @mousedown="startResize"></div>
      <div class="cs-control" :style="{ height: bottomHeight + 'px' }">
        <el-tabs
          v-model="editableTabsValue"
          type="card"
          editable
          class="demo-tabs"
          @edit="handleTabsEdit"
        >
          <el-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            <div class="log-container">
              <span class="log-date">12/29 19:07:50 </span>
              <span class="log-content">***neo has joined.</span>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="user-info">
        <span class="user-info-date">[12/29 19:28] </span>
        <span class="user-info-username">neo</span>
      </div>
      <div class="cmd">
        <el-input
          v-model="command"
          placeholder="Please input"
          class="command-input"
        >
          <template #prepend>
            <span>event></span>
          </template>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  getCurrentInstance,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
// import { ipcRenderer } from "electron";
export default defineComponent({
  name: "rootClassName",
  setup() {
    const instance = getCurrentInstance();
    const data = reactive({
      bottomHeight: 160,
      isResizing: false,
      startY: 0,
      tabIndex: 0,
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "Event Log",
          name: "1",
          content: "111",
        },
      ],
      command: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-08",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-06",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-07",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      icons: [
        {
          icon: "icon-jia",
        },
        {
          icon: "icon-jian",
        },
        {
          icon: "icon-24gf-headphones",
        },
        {
          icon: "icon-tuopuguanli",
        },
        {
          icon: "icon-liebiao",
        },
        {
          icon: "icon-miaozhun",
        },
        {
          icon: "icon-farenshenfenzheng",
        },
        {
          icon: "icon-xiazai",
        },
        {
          icon: "icon-quanxianyuechi",
        },
        {
          icon: "icon-tupian",
        },
        {
          icon: "icon-shezhi",
        },
        {
          icon: "icon-beizi",
        },
        {
          icon: "icon-wendang",
        },
        {
          icon: "icon-cloudshellyunminglinghang",
        },
        {
          icon: "icon-lianjie",
        },
        {
          icon: "icon-webloudongjiance",
        },
        {
          icon: "icon-shu",
        },
        {
          icon: "icon-zhengfangti-mianxing",
        },
      ],
      tableHeight: 350,
    });
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      console.log("onMounted");
      console.log(instance, store, route, store, router);
      console.log("----------------------");
      // ipcRenderer.send("update", "update....");
    });
    // ipcRenderer.on("something", (event, data) => {
    //   console.log(data);
    // });
    const startResize = (event) => {
      data.isResizing = true;
      data.startY = event.clientY;
      document.addEventListener("mousemove", resize);
      document.addEventListener("mouseup", stopResize);
    };
    const resize = (event) => {
      if (data.isResizing) {
        const deltaY = data.startY - event.clientY;
        data.bottomHeight += deltaY;
        if (data.bottomHeight < 90) {
          data.bottomHeight = 90;
        } else {
          data.tableHeight -= deltaY;
          if (data.tableHeight < 15) {
            data.tableHeight = 15;
            data.bottomHeight -= deltaY;
          } else {
            data.startY = event.clientY;
          }
        }
        console.log(
          "bottomHeight: " + data.bottomHeight,
          "startY: " + data.startY,
          "event.clientY: " + event.clientY,
          "tableHeight: " + data.tableHeight
        );
      }
    };
    const stopResize = () => {
      data.isResizing = false;
      document.removeEventListener("mousemove", resize);
      document.removeEventListener("mouseup", stopResize);
    };
    const handleTabsEdit = (targetName, action) => {
      if (action === "add") {
        const newTabName = `${++data.tabIndex}`;
        data.editableTabs.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content",
        });
        data.editableTabsValue.value = newTabName;
      } else if (action === "remove") {
        const tabs = data.editableTabs;
        let activeName = data.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        data.editableTabsValue.value = activeName;
        data.editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
      }
    };
    const ref = toRefs(data);
    return {
      ...ref,
      startResize,
      resize,
      stopResize,
      handleTabsEdit,
    };
  },
});
</script>

<style scoped lang="less">
#rootClassName {
}
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.top {
  flex: 1;
  background-color: #f0f0f0;
  padding: 10px;
}

.bottom {
  padding: 10px;
  position: relative;
  min-height: 80px;
}

.resize-handle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #ccc;
  cursor: ns-resize;
}
.cs-control {
  height: 100%;
  text-align: left;
}
.demo-tabs /deep/ {
  height: 100%;
}
.demo-tabs > .el-tabs__content /deep/ {
  //padding: 5px;
  //color: #6b778c;
  //font-size: 32px;
  // font-weight: 600;
  height: 100% !important;
}
.demo-tabs > .el-tabs__content > .el-tab-pane /deep/ {
  height: 100%;
}
.log-container {
  height: 70%;
  width: 100%;
  background-color: #000000;
  text-align: left;
}
.log-content {
  color: #74be2b;
}
.log-date {
  color: #cccccc;
}
.user-info {
  text-align: left;
  margin-bottom: 5px;
}
.command-input {
  background-color: black;
  color: #cccccc;
}
.nav-text,
.nav-ico {
  text-align: left;
}
.nav-ico {
  margin: 5px 0;
}
.nav-icon {
  margin-right: 8px;
  font-weight: bold;
  cursor: pointer;
}
</style>
