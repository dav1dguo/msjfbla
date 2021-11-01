<template>
  <body>
    <div>
      <div class="text-lg text-center">
        <h1>Join MSJ FBLA</h1>
      </div>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row align="center" justify="center">
          <v-col md="5">
            <v-text-field
              v-model="name"
              dense
              :rules="[(v) => !!v || 'This field is required']"
              label="Full name"
              outlined
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row align="center" justify="center">
          <v-col md="5">
            <v-text-field
              v-model.number="phonenumber"
              type="number"
              label="Phone Number"
              :rules="[(v) => !!v || 'This field is required']"
            >
            </v-text-field>
          </v-col>
        </v-row>

        <v-row align="center" justify="center">
          <v-col md="5">
            <v-autocomplete
              v-model="grade"
              dense
              :rules="[(v) => !!v || 'This field is required']"
              :items="grades"
              label="Select Grade"
              outlined
            ></v-autocomplete>
          </v-col>
        </v-row>

        <v-row align="center" justify="center">
          <v-col md="5">
            <h2>Contact Information</h2>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-avatar size="50px" tile>
                    <img
                      :src="`https://img-authors.flaticon.com/google.jpg`"
                      :alt="'google logo'"
                    />
                  </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-text-field
                    v-model="email"
                    :rules="[(v) => !!v || 'This field is required']"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-avatar size="50px" tile>
                    <img
                      :src="`https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png`"
                      :alt="'facebook logo'"
                    />
                  </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-text-field
                    v-model="facebook"
                    :rules="[(v) => !!v || 'This field is required']"
                    label="Facebook Username"
                    required
                  ></v-text-field>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-avatar size="50px" tile>
                    <img
                      :src="`https://i.pinimg.com/736x/c8/95/2d/c8952d6e421a83d298a219edee783167.jpg`"
                      :alt="'instagram logo'"
                    />
                  </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-text-field
                    v-model="instagram"
                    label="Instagram handle (optional)"
                  ></v-text-field>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-btn color="primary" style="margin-bottom=100px" @click="post" :disabled="!valid">
              Join
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </body>
</template>

<script>
import firebase from "firebase";

export default {
  data: () => ({
    // valid: true,
    // dialog: false,
    // name: "",
    // selectedClasses: [],
    // phonenumber: "",
    // email: "",
    // facebook: "",
    // instagram: "",
    // notes: "",    // gender: null,
    // genders: ["Male", "Female", "Other"],

    valid: true,
    name: "",
    grade: null,
    grades: ["9", "10", "11", "12"],
    phonenumber: "",
    email: "",
    facebook: "",
    instagram: "@",
  }),

  methods: {
    post() {
      if (this.$refs.form.validate()) {
        var db = firebase.firestore();

        db.collection("Members").doc(this.email).set({
          name: this.name,
          grade: this.grade,
          phonenumber: this.phonenumber,
          email: this.email,
          facebook: this.facebook,
          instagram: this.instagram,
        });
      }
    },
    required(value) {
      if (value instanceof Array && value.length == 0) {
        return "Required.";
      }
      return !!value || "Required.";
    },
  },
};
</script>