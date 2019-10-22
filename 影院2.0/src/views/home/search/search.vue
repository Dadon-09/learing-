<template>
  <div class="search-main">
    <div class="header">
      <div class="header-c">
        <div class="search">
          <div class="icons"></div>
          <input ref="input" type="text" placeholder="搜影片,影院,影人" />
        </div>
        <div class="cancel-text">
          <span @click="goBack">取消</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="container-c">
        <div class="hot-search">
          <div class="hot-icon">
            <span class="hot-text">萤火虫热搜</span>
          </div>
        </div>
      </div>
    </div>
    <div class="hot-name">
      <div class="hot-name-c">
        <div class="movie-name">
          <p v-for="item in lists" :key="item.id">
            {{ item.text }}
          </p>
          <div class="more">
            <span>更多热搜</span>
            <div class="more-icon"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapState({
      lists: function(state) {
        console.log(state);
        return state.search.lists;
      }
    })
  },
  mounted() {
    this.$refs["input"].focus();
  },
  created() {
    console.log(this.$store);
  }
};
</script>

<style lang="scss" scoped>
.search-main {
  .header {
    width: 100%;
    height: 44px;
    color: #fff;
    margin-top: 5px;

    .header-c {
      display: flex;
      align-items: center;
      width: 335px;
      height: 100%;
      margin: 0 auto;

      .search {
        background-color: #fff;
        width: 298px;
        height: 36px;
        border-radius: 18px;
        background-color: #33363d;
        display: flex;
        align-items: center;

        .icons {
          margin-left: 17px;
          width: 18px;
          height: 17px;
          background: url("../../../assets/imgs/home/search.png") no-repeat
            center;
          background-size: cover;
        }

        input {
          border: none;
          outline: none;
          background-color: #33363d;
          color: #fff;
          font-size: 14px;
          margin-left: 7px;
        }
      }

      .cancel-text {
        width: 32px;
        height: 16px;
        margin-left: 5px;

        span {
          display: block;
          font-size: 16px;
          color: #9b9c9f;
        }
      }
    }
  }

  // 热搜
  .container {
    width: 100%;
    margin-top: 19px;

    .container-c {
      width: 335px;
      height: 24px;
      margin: 0 auto;

      .hot-search {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        .hot-icon {
          margin-left: 4px;
          width: 27px;
          height: 24px;
          background: url("../../../assets/imgs/home/search-active.png")
            no-repeat center;
          background-size: cover;

          .hot-text {
            display: block;
            width: 90px;
            height: 24px;
            margin-left: 34px;
            color: #aeaeb0;
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
    }
  }

  //电影名字
  .hot-name {
    margin-top: 21px;
    width: 100%;

    .hot-name-c {
      width: 335px;
      margin: 0 auto;

      .movie-name {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        p {
          width: 50%;
          text-align: left;
          font-size: 16px;
          margin-bottom: 24px;
          color: #c8c9c9;
        }

        .more {
          display: flex;
          width: 50%;
          height: 16px;
          text-align: left;
          align-items: center;

          span {
            color: rgba(241, 163, 99, 1);
            font-size: 16px;
          }

          .more-icon {
            margin-left: 8px;
            width: 7px;
            height: 13px;
            background: url("../../../assets/imgs/icons/right.png") no-repeat
              center;
            background-size: cover;
          }
        }
      }
    }
  }
}
</style>