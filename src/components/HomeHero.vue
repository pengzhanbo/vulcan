<script lang="ts" setup>
import Card from './Card.vue'

const elRef = ref<HTMLElement | null>(null)

const { t } = useI18n()

onMounted(() => {
  let frames = 1
  const rad = Math.PI / 180
  let bfx, bfy

  function freqAnimation() {
    frames += 0.2

    bfx = 0.03
    bfy = 0.03

    bfx += 0.005 * Math.cos(frames * rad)
    bfy += 0.005 * Math.sin(frames * rad)

    const bf = `${bfx.toString()} ${bfy.toString()}`
    // displacement.setAttributeNS(null, 'scale', frames);
    elRef.value?.setAttributeNS(null, 'baseFrequency', bf)

    window.requestAnimationFrame(freqAnimation)
  }

  window.requestAnimationFrame(freqAnimation)
})
</script>

<template>
  <Card border-bottom>
    <h3 class="hero-title">
      <span>{{ t('productName') }}</span>
    </h3>
    <p class="hero-message">
      {{ t('home.description') }}
    </p>
  </Card>
  <svg width="0" height="0">
    <filter id="filter">
      <feTurbulence ref="elRef" type="fractalNoise" baseFrequency=".03 .03" numOctaves="30" />
      <feDisplacementMap in="SourceGraphic" scale="30" />
    </filter>
  </svg>
</template>

<style lang="scss">
.hero-title {
  font-weight: 900;
  font-size: 72px;
  line-height: 1.2;
  margin: 20px 0;
  filter: url('#filter');

  span {
    color: #ff6600;
    background: linear-gradient(#fff, #999, #ddd, #888);
    background-clip: text;
    animation: blurChange 2s ease-out forwards;
  }
}

.hero-message {
  margin: auto;
}

@keyframes blurChange {
  100% {
    filter: blur(3px) contrast(200%);
  }
}
</style>
