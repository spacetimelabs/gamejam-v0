<template>
  <div class="cat">
    <img class="tail" :src="rabos[cat.tail]" />
    <img class="body" :src="corpos[cat.body]" />
    <img class="paws" :src="patas[cat.body]" />
    <div class="head">
      <img class="head-bg" :src="cabecas[cat.head]" />
      <img class="eye" :src="olhos[cat.eyes]" />
      <img class="mouth" :src="bocas[cat.mouth]" />
    </div>
  </div>
</template>

<script>
const bocas = {
  aberta: require("@/assets/boca-aberta.png"),
  baixa: require("@/assets/boca-baixa.png"),
  feliz: require("@/assets/boca-feliz.png")
};

const cabecas = {
  amarelo: require("@/assets/cabeca-amarelo.png"),
  cinza: require("@/assets/cabeca-cinza.png"),
  manchado: require("@/assets/cabeca-manchado.png"),
  preto: require("@/assets/cabeca-preto.png")
};

const corpos = {
  amarelo: require("@/assets/corpo-amarelo.png"),
  cinza: require("@/assets/corpo-cinza.png"),
  manchado: require("@/assets/corpo-manchado.png"),
  preto: require("@/assets/corpo-preto.png")
};

const olhos = {
  assustado: require("@/assets/olhos-assustado.png"),
  bravo: require("@/assets/olhos-bravo.png"),
  grandes: require("@/assets/olhos-grandes.png"),
  preguica: require("@/assets/olhos-preguica.png"),
  triste: require("@/assets/olhos-triste.png")
};

const patas = {
  cinza: require("@/assets/patas-cinza.png"),
  manchado: require("@/assets/patas-manchado.png"),
  preto: require("@/assets/patas-preto.png"),
  amarelo: require("@/assets/patas-amarelo.png")
};

const rabos = {
  amarelo: require("@/assets/rabo-amarelo.png"),
  cinza: require("@/assets/rabo-cinza.png"),
  manchado: require("@/assets/rabo-manchado.png"),
  preto: require("@/assets/rabo-preto.png")
};

export default {
  props: {
    cat: Object
  },
  data() {
    return {
      bocas,
      cabecas,
      corpos,
      olhos,
      patas,
      rabos
    };
  }
};
</script>

<style scoped>
.cat {
  position: absolute;
  top: 300px;
  left: 440px;
  zoom: 1.5;
}

.head {
  position: absolute;
  top: 0;
  left: 0;

  animation: head_movement1 3s ease-in-out infinite,
    head_movement2 2.2s ease-in-out infinite;
}

@keyframes head_movement1 {
  0% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}

@keyframes head_movement2 {
  0% {
    top: -1px;
  }
  50% {
    top: 3px;
  }
  100% {
    top: -1px;
  }
}

.eye {
  position: absolute;
  left: 9px;
  top: 20px;
}

.mouth {
  position: absolute;
  left: 17px;
  top: 32px;
}

.body {
  position: absolute;
  top: 38px;
  left: 8px;
  z-index: -1;
}

.paws {
  position: absolute;
  top: 78px;
  left: 8px;
}

.tail {
  position: absolute;
  top: 27px;
  left: 68px;
  z-index: -2;

  animation: tail_movement 2s ease-in-out infinite;
  transform-origin: bottom left;
}

@keyframes tail_movement {
  0% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(2deg);
  }
  100% {
    transform: rotate(-2deg);
  }
}
</style>
