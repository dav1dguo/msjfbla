<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>MSJ FBLA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y v-if="user">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">{{ user.email }}</v-btn>
        </template>
        <v-list>
          <v-list-item @click="onSignout">
            <v-list-item-title>Sign out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn v-else to="/SignIn">Get Started</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </v-list-item-group>

        <v-list-item to="/MemberSignUp">
          <v-list-item-icon>
            <v-icon>mdi-account-group-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Sign up</v-list-item-title>
        </v-list-item>

        <v-list-item to="Calendar">
          <v-list-item-icon>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Calendar</v-list-item-title>
        </v-list-item>

        <v-list-item to="faq">
          <v-list-item-icon>
            <v-icon>mdi-help</v-icon>
          </v-list-item-icon>
          <v-list-item-title>FAQ</v-list-item-title>
        </v-list-item>

        <v-list-item to="/Admin" v-if="isAdmin">
          <v-list-item-icon>
            <v-icon>mdi-wrench</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Admin</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
    <!-- <v-bottom-navigation
      absolute
      color="white"
      hide-on-scroll
      horizontal
      scroll-target="#scroll-threshold-example"
      scroll-threshold="1000000"
    >
      <v-btn>
        <span>@msjfbla</span>

        <v-icon>mdi-instagram</v-icon>
      </v-btn>

      <v-btn href="https://www.facebook.com/groups/1135571376946631">
        <span>Facebook</span>

        <v-icon>mdi-facebook</v-icon>
      </v-btn>

      <v-btn href="https://discord.gg/tHSFxSXv">
        <span>Discord</span>

        <v-icon>mdi-discord</v-icon>
      </v-btn>

      <v-btn href="mailto:fblamsj@gmail.com">
        <span>fblamsj@gmail.com</span>

        <v-icon>mdi-email</v-icon>
      </v-btn>
    </v-bottom-navigation> -->
  </v-app>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      drawer: false,
      user: null,
      group: null,
      isAdmin: false,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
      if (firebase.auth().currentUser != null) {
        console.log("this user is signed in");
        firebase
          .firestore()
          .collection("Admins")
          .doc(firebase.auth().currentUser.email)
          .get()
          .then((docSnapshot) => {
            if (docSnapshot.exists) {
              this.isAdmin = true;
            }
          });
      }
    });
  },
  methods: {
    onSignout(e) {
      e.stopPropagation();
      firebase.auth().signOut();
      this.isAdmin = false;
    },
  },
};
</script>
