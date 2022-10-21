<template>
  <nav>
    

  <router-link to="/">ALL Items</router-link> |
  <router-link to="/about">Item description</router-link> |
  <router-link to="/Graphiques">Graphique</router-link> |
  
  <router-view />
 </nav>
</template>


<style>

nav { 
  
  padding: 50px;
  
   
}

</style>