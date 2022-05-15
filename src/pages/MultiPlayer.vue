<template>
  <q-page class="flex flex-center">
    <q-btn
      round
      class="absolute-top-left q-ma-md"
      color="primary"
      icon="arrow_back"
      size="1rem"
      href="/"
    />
    <div class="column items-center">
      <div class="q-ma-md text-h2">{{ winner }}</div>

      <div class="q-gutter-md q-ma-md">
        <span class="text-h5">
          Player 1: <span class="text-h3">{{ playerOneScore }}</span></span
        >
        <span class="text-h5">
          Player 2: <span class="text-h3">{{ playerTwoScore }}</span></span
        >
      </div>
      <q-card class="my-card">
        <q-card-section horizontal>
          <q-card-section>
            <img
              v-if="playerOneWeapon != 'none'"
              :src="'/weapons/' + playerOneWeapon + '.png'"
              height="100"
              width="100"
            />
            <q-icon v-else size="100px" name="question_mark" />
          </q-card-section>
          <q-separator vertical />
          <q-card-section>
            <img
              v-if="playerTwoWeapon != 'none'"
              :src="'/weapons/' + playerTwoWeapon + '.png'"
              height="100"
              width="100"
              style="transform: scaleX(-1)"
            />
            <q-icon v-else size="100px" name="question_mark" />
          </q-card-section>
        </q-card-section>
      </q-card>
      <div class="q-gutter-sm" v-if="turn != ''">
        <q-btn
          color="primary"
          label="Rock"
          @click="getGameResponse('rock')"
          @click.prevent="playSound2('/audio/button.mp3')"
        />
        <q-btn
          color="primary"
          label="Paper"
          @click="getGameResponse('paper')"
          @click.prevent="playSound2('/audio/button.mp3')"
        />
        <q-btn
          color="primary"
          label="Scissors"
          @click="getGameResponse('scissors')"
          @click.prevent="playSound2('/audio/button.mp3')"
        />
      </div>
      <div class="q-ma-xl text-h5">{{ turn }}</div>
      <q-btn
        color="primary"
        label="Play again"
        @click="reset()"
        v-if="turn == ''"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      turn: "player 1's turn",
      winner: "",
      playerOneScore: 0,
      playerTwoScore: 0,
      playerOneWeapon: "none",
      playerTwoWeapon: "none",
    };
  },

  methods: {
    playSound1(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.volume = 0.6;
        audio.play();
      }
    },
    playSound2(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.volume = 0.1;
        audio.play();
      }
    },
    computerPlay() {
      let random = Math.floor(Math.random() * 3);
      if (random === 0) {
        return "rock";
      } else if (random === 1) {
        return "paper";
      } else {
        return "scissors";
      }
    },
    playRound(playerOneSelection, playerTwoSelection) {
      if (playerOneSelection === playerTwoSelection) {
        return "Draw";
      } else if (playerOneSelection === "rock") {
        if (playerTwoSelection === "paper") {
          return "Player two Wins!";
        } else {
          return "Player one Wins!";
        }
      } else if (playerOneSelection === "paper") {
        if (playerTwoSelection === "scissors") {
          return "Player two Wins!";
        } else {
          return "Player one Wins!";
        }
      } else if (playerOneSelection === "scissors") {
        if (playerTwoSelection === "rock") {
          return "Player two Wins!";
        } else {
          return "Player one Wins!";
        }
      }
    },
    getWinner() {
      this.winner = this.playRound(this.playerOneWeapon, this.playerTwoWeapon);
      this.winner == "Player one Wins!"
        ? this.playerOneScore++
        : this.winner == "Player two Wins!"
        ? this.playerTwoScore++
        : null;
    },
    getGameResponse(move) {
      if (this.turn === "player 1's turn") {
        this.playerOneWeapon = move;
        this.turn = "player 2's turn";
      } else {
        this.playerTwoWeapon = move;
        this.turn = "";
        this.getWinner();
      }
    },
    reset() {
      this.turn = "player 1's turn";
      this.winner = "";
      this.playerOneWeapon = "none";
      this.playerTwoWeapon = "none";
    },
  },
  name: "IndexPage",
  created: function () {
    this.playSound1("/audio/start.mp3");
  },
});
</script>




