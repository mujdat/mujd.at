<template>
  <div>
    <intro-text title="About">
      <p>
        Hello there!<span class="mx-2">👋🏻</span> My name is Müjdat Korkmaz, I'm
        a {{ currentAge }} year a Front-End Developer and I currently work at
        <span class="text-[#f7a823]">
          <a class="hover:underline" href="https://phmu.de"> PHMU</a></span
        >
        based in Dresden, Germany.
      </p>
      <p>
        I was born in Bulgaria, grew up in Turkey and I've been living in
        Germany since 2011. I was introduced to the world of web development
        back in high school and my first site was built with WordPress!
      </p>
      <p>
        For a long time I did web development as a hobby and it was a lot of
        fun! I then started to study Linguistics at TU Dresden but after a
        couple years into my studies I decided to drop out and pursue a career
        as a web developer. During my studies and the transitional period to
        becoming a developer I had worked in different fields such as
        communication, customer service and retail but finally in May 2019, I
        found my dream job as a Front-End Developer at PHMU!
      </p>
    </intro-text>
  </div>
</template>
<script>
export default {
  name: 'AboutPage',
  head() {
    return {
      title: this.aboutTitle,
    }
  },
  computed: {
    aboutTitle() {
      return this.$store.state.meta.about.title
    },
    currentAge() {
      const currentYear = new Date().getFullYear()
      const birthYear = 1992
      return currentYear - birthYear
    },
  },
}
</script>
