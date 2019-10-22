<template>
  <div class="boxOffice">
    <div class="headCenter">
      <div class="head">
        <span @click="go()">&lt;</span>
        <p>傲慢与偏见</p>
      </div>
    </div>
    <div class="wrapper">
      <div class="content">
        <div class="rank">
          <div>
            <p>2</p>
            <p>今日票房排行</p>
          </div>
          <div>
            <p>70</p>
            <p>首周票房 (万)</p>
          </div>
          <div>
            <p>2600</p>
            <p>本周票房排行</p>
          </div>
        </div>
        <div class="all-rank">
          <div class="title">总票房</div>
          <table>
            <tr>
              <th>地区</th>
              <th>每周末票房</th>
              <th>总票房</th>
            </tr>
            <tr>
              <td>中国</td>
              <td>暂无数据</td>
              <td>1500万</td>
            </tr>
            <tr>
              <td>美国</td>
              <td>50</td>
              <td>500万</td>
            </tr>
            <tr>
              <td>韩国</td>
              <td>90</td>
              <td>700万</td>
            </tr>
          </table>
        </div>
        <div class="rank-main">
          <div class="title">
            <p>日票房明细</p>
            <p>单位 :万元</p>
          </div>
          <table>
            <tr>
              <th>日期</th>
              <th>当日票房</th>
              <th>票房占比</th>
              <th>排片占比</th>
              <th>场均人次</th>
            </tr>
            <tr v-for="item in lists" :key="item.id">
              <td>
                <p>{{item.time}}</p>
                <p>{{item.date}}</p>
              </td>
              <td>{{item.rank}}</td>
              <td>{{item.proportion}}</td>
              <td>{{item.ticket}}</td>
              <td>{{item.men}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Mock from "mockjs";
const Random = Mock.Random;
export default {
  data() {
    return {
      lists: [
        {
          id: Random.guid(),
          time: Random.time("yyyy-MM-dd"),
          rank: Random.float(100, 500, 1, 2),
          proportion: Random.float(1, 20, 1, 2) + "%",
          ticket: Random.float(1, 20, 1, 2) + "%",
          men: Random.natural(10, 100),
          date: "星期六首映"
        },
        {
          id: Random.guid(),
          time: Random.time("yyyy-MM-dd"),
          rank: Random.float(100, 500, 1, 2),
          proportion: Random.float(1, 20, 1, 2) + "%",
          ticket: Random.float(1, 20, 1, 2) + "%",
          men: Random.natural(10, 100),
          date: "星期日票房"
        },
        {
          id: Random.guid(),
          time: Random.time("yyyy-MM-dd"),
          rank: Random.float(100, 500, 1, 2),
          proportion: Random.float(1, 20, 1, 2) + "%",
          ticket: Random.float(1, 20, 1, 2) + "%",
          men: Random.natural(10, 100),
          date: "星期二票房"
        },
        {
          id: Random.guid(),
          time: Random.time("yyyy-MM-dd"),
          rank: Random.float(100, 500, 1, 2),
          proportion: Random.float(1, 20, 1, 2) + "%",
          ticket: Random.float(1, 20, 1, 2) + "%",
          men: Random.natural(10, 100),
          date: "星期三票房"
        },
        {
          id: Random.guid(),
          time: Random.time("yyyy-MM-dd"),
          rank: Random.float(100, 500, 1, 2),
          proportion: Random.float(1, 20, 1, 2) + "%",
          ticket: Random.float(1, 20, 1, 2) + "%",
          men: Random.natural(10, 100),
          date: "星期四票房"
        },
        {
          id: Random.guid(),
          time: Random.time("yyyy-MM-dd"),
          rank: Random.float(100, 500, 1, 2),
          proportion: Random.float(1, 20, 1, 2) + "%",
          ticket: Random.float(1, 20, 1, 2) + "%",
          men: Random.natural(10, 100),
          date: "星期五票房"
        }
      ]
    };
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(wrapper);
  },
  methods: {
    go() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.boxOffice {
  width: 100%;
  height: 100%;
  color: #86888c;
  font-size: 12px;

  .headCenter {
    font-size: 16px;
    width: 375px;
    height: 50px;
    margin: 0 auto;
    background-color: #23262d;
    line-height: 35px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;

    .head {
      width: 345px;
      height: 100%;
      margin: 0 auto;
      margin-top: 5px;
      display: flex;
      align-items: center;

      p {
        flex: 1;
        text-align: center;
        color: #ffffff;
      }
    }
  }

  .rank {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      height: 50px;

      p {
        margin-top: 5px;
      }

      p:first-child {
        font-size: 18px;
        color: #fbc34a;
      }
    }
  }

  .all-rank {
    border-top: 6px solid #33363d;
    border-bottom: 6px solid #33363d;

    .title {
      font-size: 16px;
      height: 20px;
      line-height: 20px;
      text-align: left;
      color: #ffffff;
      margin-top: 20px;
    }

    table {
      margin-top: 30px;

      tr {
        width: 345px;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        td {
          color: #ffffff;
        }
      }

      tr:last-child {
        margin-bottom: 20px;
      }
    }
  }

  .rank-main {
    .title {
      width: 100%;
      height: 20px;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 20px;

      p:first-child {
        font-size: 16px;
        line-height: 20px;
        color: #ffffff;
      }
    }

    table {
      margin-top: 30px;

      tr {
        width: 345px;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        td,
        th {
          width: 50px;
        }

        td:first-child {
          width: 80px;
        }

        th:first-child {
          width: 80px;
        }
      }

      tr:nth-child(2) {
        td:first-child {
          width: 80px;

          p:first-child {
            color: #c01212;
          }

          p:last-child {
            color: #fbc34a;
          }
        }
      }
    }
  }
}

.wrapper {
  width: 100%;
  height: 100%;
  margin-top: 80px;

  .content {
    width: 345px;
    margin: 0 auto;

    padding-bottom: 200px;
  }
}
</style>