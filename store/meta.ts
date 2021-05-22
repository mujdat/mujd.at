interface MetaObject {
  title: string
}

export interface MetaState {
  about: MetaObject
  music: MetaObject
  photos: MetaObject
}

export const state = () => ({
  about: {
    title: `Müjdat Korkmaz | About | Front-End Developer based in Dresden, Germany.`,
  },
  music: {
    title: `Müjdat Korkmaz | Music | Front-End Developer based in Dresden, Germany.`,
  },
  photos: {
    title: `Müjdat Korkmaz | Photos | Front-End Developer based in Dresden, Germany.`,
  },
})
