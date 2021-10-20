<template>
    <div id="container">
      <div id="profile">
        <img alt="avatar" src="@/assets/avatar.png">
      </div>
      <ul>
        <li>
            <v-btn class="button"
                    block
                    elevation="2"
                    x-large>
                    <b>SZUKAJ LODA</b>
            </v-btn>
        </li>
        <li>
            <v-btn class="button"
                    block
                    elevation="2"
                    x-large>
                    <b>ZALOGUJ SIĘ</b>
            </v-btn>
        </li>
        <li>
            <v-btn class="button"
                    block
                    elevation="2"
                    x-large>
                    <b>REJESTRACJA</b>
            </v-btn>
        </li>
      </ul>
      <center valign="bottom">Robert Klinger i Krzysztof Picur © 2021 | prawa zastrzeżone</center>
    </div>
</template>

<script>
export default{
  name: 'Menu'
}
</script>

<style scoped>
#container {
  width: 15.6%;
  background-color: #ff9e4f;
  position: relative;
}

#profile {
  margin: 1.3vw auto 1.3vw;

  width: 13vw;
  height: 13vw;

  border-radius: 50%;
  background-color: #ffcf7f;

  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 4.15vw;
}

ul {
  list-style-type: none;
}

.button {
    padding: 1.565vw !important;

    width: 100%;
    height: 3.15vw !important;

    border-radius: 0px;
    justify-content: left;
    font-size: 1.565vw !important;
    letter-spacing: 0px;
    color: white !important;

    background-color: #ff9e4f !important;
    box-shadow: none;
}

.button:hover {
    background-color: #ee8d3e !important;
}

center {
    position: absolute;
    bottom: 10px;

    font-size: 0.75vw;
    justify-content: center;
}
</style>
