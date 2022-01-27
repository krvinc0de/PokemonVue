<template>
        <article class="card">
            <div class="card-body">
                <img :src="pokemon.imgCvg" alt="" class="card-body-img" />
                <h1 class="card-body-title">
                    {{ pokemon.nombre }}
                    <span> {{ pokemon.hp }} hp </span>
                </h1>
                <p class="card-body-text"> {{ pokemon.experiencia}} exp </p>
                <h1 style="color: #37F971">Evelyn De Leon Hernandez </h1>
            </div>
            <div class="card-footer">
                <div class="card-footer-social">
                    <h3>{{ pokemon.ataque }} K </h3>
                    <p>Ataque</p>
                </div>
                <div class="card-footer-social">
                    <h3>{{ pokemon.especial }} K</h3>
                    <p>Especial</p>
                </div>
                <div class="card-footer-social">
                    <h3>{{ pokemon.defensa }} K</h3>
                    <p>Defensa</p>
                </div>
            </div>

        </article>    
</template>
<script>
export default {
    props: ['pokemon']
}
</script>

<style scoped>
.card {
  background-color: rgb(255, 0, 0);
  border-radius: 15px;
  margin-top: 20px;
  overflow: hidden;
  max-width: 320px;
  -webkit-box-shadow: 0px 1px 10px rgba(85, 4, 4, 0.315);
          box-shadow: 0px 1px 10px rgba(109, 5, 5, 0.315);
}

.card-header {
  width: 100%;
  display: block;
}

.card-body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border-bottom: 5px solid rgba(51, 2, 2, 0.808);
}

.card-body-img {
  border-radius: 50%;
  border: 5px solid white;
  background-color: white;
  margin-top:15px;
  width: 200px;
  height: 200px;
}

.card-body-title {
  margin: 0;
  margin-top: 2rem;
  color: #ffd900;
  font-size: 1.8rem;
}

.card-body-title span {
  color: rgb(208, 255, 0);
  font-weight: 400;
}

.card-body-text {
  font-size: 1.7rem;
  color: #53f134;
  margin-bottom: 0rem;
}

.card-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
          
}

.card-footer-social {
  text-align: center;
}

.card-footer-social h3 {
  font-size: 2rem;
  color:#ffffff;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.card-footer-social p {
  font-size: 1.7rem;
  font-weight: 700;
  color: #fcf8f4;
  letter-spacing: 1.5px;
  margin-top: 0px;
  margin-bottom: 2rem;
}
</style>