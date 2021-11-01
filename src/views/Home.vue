<template>
  <v-row no-gutters>
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      src="./Pictures/logo.png"
    >
      <v-theme-provider dark>
        <v-container fill-height>
          <v-row align="center" class="white--text mx-auto" justify="center">
            <v-col class="black--text text-center" cols="12" tag="h1">
              <span
                :class="[
                  $vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2',
                ]"
                class="font-weight-light"
              >
                WELCOME TO
              </span>

              <br />

              <span
                :class="[
                  $vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4',
                ]"
                class="font-weight-black"
              >
                MSJ FBLA
              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-theme-provider>
    </v-img>
    <v-container vertical-align:middle class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">ABOUT US</h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        Future Business Leaders of America (FBLA) is an international
        organization with over 100,000 members across the nation that provides
        students with opportunities to compete in a variety of categories,
        including marketing, finance, health administration, 3D design, computer
        science, economics, politics, and much more! The MSJ chapter of FBLA is
        dedicated to expanding this mission throughout our school. If you are
        interested in broadening your career technical knowledge, then make sure
        to join the club!
      </v-responsive>

      <div></div>

      <v-btn color="grey"  @click="$router.push('MemberSignUp')" outlined large>
        <span class="grey--text text--darken-1 font-weight-bold">
          SIGN UP
        </span>
      </v-btn>

      <v-btn color="grey" href="https://www.fbla-pbl.org/" outlined large>
        <span class="grey--text text--darken-1 font-weight-bold">
          Official National Page
        </span>
      </v-btn>
    </v-container>
    <v-container vertical-align: middle class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">MEET THE OFFICERS</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row align="center" justify="center">
        <v-col
          v-for="({ icon, title, position, text }, i) in features"
          :key="i"
          cols="12"
          md="4"
        >
          <v-card
            class="py-14 px-4"
            color="grey lighten-5"
            flat
            style="overflow-y: auto; height: 600px"
          >
            <v-theme-provider dark>
              <div>
                <v-avatar color="primary" size="150">
                  <v-img :src="getImage(icon)" alt="pic" />
                </v-avatar>
              </div>
            </v-theme-provider>

            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              v-text="title"
            ></v-card-title>

            <v-card-subtitle
              class="justify-center font-weight-black text-uppercase"
              v-text="position"
            ></v-card-subtitle>

            <v-card-text class="subtitle-1" v-text="text"> </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-parallax
      class="text-center"
      :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
      style="width: 100%"
      src="https://wallpaperaccess.com/full/656684.jpg"
    >
      <v-container fill-height class="text-center">
        <v-row class="mx-auto">
          <v-col v-for="[value, title] of stats" :key="title" cols="12" md="4">
            <div class="text-center">
              <div
                class="display-3 font-weight-black mb-4"
                v-text="value"
              ></div>

              <div
                class="title font-weight-regular text-uppercase"
                v-text="title"
              ></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </v-row>
</template>


<script>
export default {
  data() {
    return {
      features: [
        {
          icon: "./Pictures/jiya.jpg",
          title: "Jiya Gupta",
          position: "President",
          text: "Hey! I’m Jiya, and I’m a junior at MSJHS. In my free time, I love spending time with my dog, eating, and talking to people. Feel free to each out to me if you have any questions!",
        },
        {
          icon: "./Pictures/david.jpg",
          title: "David Guo",
          position: "Vice President of Computer Science and Tech",
          text: "Nice to meet you! I'm David and the VP of CS. From programming to dancing to playing the piano, I'm passionate for challenges. I look forward to doing great things and working with you in the future.",
        },
        {
          icon: "./Pictures/ryan.jpg",
          title: "Ryan Liu",
          position: "Vice President of Humanities",
          text: "Hi everyone! My name is Ryan and I'm a junior here at MSJ. I'll be MSJ FBLA's Director of Education for Humanities next year, and I'm excited to help everyone grow and do well in competitions! In my spare time, I play volleyball and read. Excited to meet you all in the upcoming year!",
        },
        {
          icon: "./Pictures/krisha.jpg",
          title: "Krisha Bhat",
          position: "Vice President of Membership",
          text: "Hi! I'm Krisha, a junior at Mission. I love to read, dance, and eat. I look forward to meeting you all!",
        },
        {
          icon: "./Pictures/shelley.jpg",
          title: "Shelley Fernando",
          position: "Treasurer",
          text: "Hi, I’m Shelley, a junior at MSJHS. I like sleeping, reading, and playing the flute. I’m excited to work with everyone this year! ",
        },
        {
          icon: "./Pictures/pineapple.jpeg",
          title: "Abhita Devananda",
          position: "Secretary",
          text: "Hi! I’m Abhita and I’m a junior at MSJHS. Some of my hobbies include playing volleyball, guitar, and traveling. I’m super excited to work with you all!",
        },
        {
          icon: "./Pictures/ava.png",
          title: "Ava Shah",
          position: "Publicity",
          text: "Hi I'm Ava, a junior at msjhs. I love drinking boba, hiking, and watching the sunsets! Can't wait to work with you all and see where we take this club:)",
        },
      ],
      stats: [
        ["70+", "Events"],
        ["196,950", "Members"],
        ["5,200", "Chapters"],
      ],
    };
  },
  methods: {
    getImage(icon) {
      return icon ? require("" + icon) : "";
    },
  },
};
</script>
