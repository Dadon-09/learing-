<template>
  <div class="main">
    <div>
      <li v-for="item in list" :key="item.name" class="container">
        <div class="containerimg" @click="gotomoviedetails(item.id)">
          <img :src="item.imgsrc" alt />
        </div>
        <div class="containerbox">
          <div class="title">{{item.movieName}}</div>
          <div class="score" v-if="item.score">
            萤火虫评分
            <span>{{item.score}}</span>
          </div>
          <div v-if="item.number" class="number">
            <span style="color:#fbc34a;">{{item.number}}万</span>人想看
          </div>
          <div class="oneoline">导演:{{item.director}}</div>
          <div class="oneoline" v-if="item.starring">主演:{{item.starring}}</div>
          <div class="today" v-if="item.spot">
            <span
              v-for="(items, index) in item.spot"
              :key="index"
              :style="`color:${items.color}`"
            >{{items.text}}</span>
          </div>
          <div :class="`buy ${item.mode=='购买'?'shop':'noshop'}`" @click="gotocinema">{{item.mode}}</div>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import { log } from "util";

export default {
  data() {
    return {};
  },
  computed: {
    list() {
      console.log(this.$store.state.mine.moveList);
      return this.$store.state.mine.moveList;
    }
  },
  mounted() {
    this.$nextTick(() => {
      // console.log(this.$parent.scroll);
      this.scroll = this.$parent.scroll;
      console.log(this.scroll);
      this.scroll.refresh();
    });
  },
  methods: {
    gotomoviedetails(isid) {
      this.$router.push({
        path: "/moviedetails",
        query: {
          id: isid
        }
      });
    },
    gotocinema() {
      this.$router.push("/cinema");
    }
  }
};
</script>
<style  lang="scss" scoped>
div {
  color: #fff;
}

.main {
  margin-bottom: 150px;
}

.container {
  width: 335px;
  margin: 10px auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  img {
    border-radius: 8px;
    width: 105px !important;
    height: 155px;
  }

  .containerbox {
    border-radius: 8px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 2px;
    width: 230px;
    height: 146px;
    background-color: rgba(51, 54, 61, 1);
    text-align: left;
    padding-left: 8px;

    .title {
      font-size: 16px;
      font-weight: 500;
      line-height: 50px;
    }

    .score {
      font-size: 14px;
      margin-bottom: 10px;
      color: rgba(247, 239, 239, 0.9);

      span {
        color: #fbc34a;
      }
    }

    .number {
      margin-bottom: 10px;
      font-size: 15px;
    }

    .oneoline {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.7);
      line-height: 15px;
    }

    .today {
      span {
        display: inline-block;
        width: 48px;
        border-radius: 5px;
        margin-top: 2 px;
        margin-right: 5px;
        text-align: center;
        border: 1px solid;
        line-height: 18px;
        height: 18px;
      }
    }

    .buy {
      position: absolute;
      right: 20px;
      top: 50%;
      width: 55px;
      border-radius: 5px;
      line-height: 26px;
      text-align: center;
      height: 25px;
    }

    .buy.shop {
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
    }

    .buy.noshop {
      background: linear-gradient(
        150deg,
        rgba(98, 75, 163, 1) 0%,
        rgba(203, 68, 152, 1) 100%
      );
    }
  }
}
</style>