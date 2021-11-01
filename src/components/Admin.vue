<template>
  <div>
    <h1>All Members</h1>
    <v-container>
      <v-row>
        <v-col v-for="m in members" :key="m.id" cols="12" sm="4">
          <v-card class="mx-auto" max-width="344">
            <v-card-title class="title primary--text pl-0">
              {{ m.name }}
            </v-card-title>
            <v-card-text>
              Contact Information:
              <div class="primary--text mb -2">Email: {{ m.email }}</div>
              <div class="primary--text mb -2">Facebook: {{ m.facebook }}</div>
              <div class="primary--text mb -2">
                Phonenumber: {{ m.phonenumber }}
              </div>
              <div class="primary--text mb -2">Grade: {{ m.grade }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-card max-width outlined>
      <v-text-field
        class="half"
        style="width: 70%"
        v-model="emailOfNewAdmin"
      ></v-text-field>
      <v-card-actions>
        <v-btn @click="makeAdmin">make admin </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      members: [],
      emailOfNewAdmin: null,
    };
  },
  created() {
    firebase
      .firestore()
      .collection("Members")
      .onSnapshot((querySnapShot) => {
        this.members = [];
        querySnapShot.forEach((doc) => {
          this.members.push(doc.data());
        });
      });
  },
  methods: {
    makeAdmin() {
      firebase.firestore().collection("Admins").doc(this.emailOfNewAdmin).set({
        email: this.emailOfNewAdmin,
      });
    },
  },
};
</script>
