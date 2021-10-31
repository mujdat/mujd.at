interface MetaObject {
  title: string
}

export interface MetaState {
  about: MetaObject
  music: MetaObject
  photos: MetaObject
  contact: MetaObject
  imprint: MetaObject
}

export const state = () => ({
  about: {
    title: `Müjdat Korkmaz | About | Front-End Developer based in Dresden, Germany.`
  },
  music: {
    title: `Müjdat Korkmaz | Music | Front-End Developer based in Dresden, Germany.`
  },
  photos: {
    title: `Müjdat Korkmaz | Photos | Front-End Developer based in Dresden, Germany.`
  },
  contact: {
    title: `Müjdat Korkmaz | Contact | Front-End Developer based in Dresden, Germany.`
  },
  imprint: {
    title: `Müjdat Korkmaz | Imprint | Front-End Developer based in Dresden, Germany.`
  }
})
