<template>
  <div class="home p2 border-box">
    <div class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        alt="hero"
      >

      <div
        v-if='data.motto'
        class='left-align'
      >
        <div class='h3'>人生格言:</div>
        <div class="text">
          <p v-for='item of data.motto' class='textIndent2 m0'>{{item.info}}</p>
        </div>
      </div>

    </div>
    <div>
      <div class='h3'>最新文章</div>
      <div v-for="(item,key) of yeardirs">
        <div class='mt2 h6 center'>{{key}}年</div>
        <hr>
        <ul>
          <li v-for='it of item'>
            <div>
              <div @click='lookdeatails(it)' class='textlink pointer h6'>
                <span>{{it.title}}</span>
                <span class='textsecondary text'>({{it.datatext}})</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <Content custom />

    <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    },
    yeardirs() {
      return this.$yeardirs;
    }
  },
  mounted() {},
  methods: {
    lookdeatails(item) {
      this.$router.push(item.path);
    }
  }
};
</script>

<style lang="stylus">
@import './styles/config.styl';

.home {
  padding: $navbarHeight 2rem 0;
  max-width: 960px;
  min-height: 100vh;
  background-color: #f5f5d5;
  letter-spacing: -0.01em;
  margin: 0px auto;

  .motto {
    text-align: left;

    .mottotitle {
      font-size: 2rem;
      color: #444;
    }

    p {
      margin: 0;
    }
  }

  .hero {
    text-align: center;

    img {
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }

    h1 {
      font-size: 3rem;
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      font-size: 1.6rem;
      color: #b2b2b2;
      text-indent: 2em;
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features {
    border-top: 1px solid $borderColor;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid $borderColor;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobile) {
  .home {
     margin-top:3.6rem;
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .motto {
        .mottotitle {
          margin-top: 1rem;
          font-size: 1.6rem;
        }
      }

      .description {
        margin-top: 0px;
        font-size: 1rem;

        p {
          margin: 0;
        }
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
