<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">🏠 Home</router-link></li>
      <li><router-link to="/about">🎨 Sobre o projeto</router-link></li>
      <li><router-link to="/contact">🧑‍💻 Contato</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: grid;
  width: 100%;
  justify-items: center;
  padding-block: 10px;
  border-bottom: 1px solid grey;
}

.navbar ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 25px;
  width: 75%;
}

.navbar li {
  border: 1px solid black;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.3);
  background: rgb(234, 234, 234);
  color: rgb(69, 69, 69);
  width: 100%;
  height: 100%;
  text-align: center;
}

a {
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding: 5px;
  display: inline-block;
  transition: all 0.25s ease;
  font-size: 1rem;
}

a:visited {
  color: darkblue;
}

a:active,
a.router-link-active {
  color: green;
  background-color: lightgreen;
  font-size: 1.05rem;
}
</style>
