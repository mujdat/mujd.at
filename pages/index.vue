<template>
  <div>
    <intro-text title="Hello! My name is Müjdat Korkmaz">
      <p>
        I'm a Front-End Developer, I work at
        <a
          class="text-[#f7a823] pb-1 transition duration-300 border-b-2 border-transparent hover:border-[#f7a823]"
          href="https://phmu.de"
        >
          PHMU</a
        >
        and live in the beautiful city of Dresden, Germany.
      </p>
      <p>
        Welcome to my personal website where you'll be able to find stuff I'm
        working on or learning, music I listen to or create and photos I take or
        like.
      </p>
      <div>
        <nuxt-link to="about">
          <btn>More about me</btn>
        </nuxt-link>
      </div>
    </intro-text>
  </div>
</template>
<script>
export default {
  layout: 'default',
}
</script>
