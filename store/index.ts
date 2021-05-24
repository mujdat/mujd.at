import { MetaState } from '@/store/meta'
import { PhotosState } from '@/store/photos'
import { MusicState } from '@/store/music'

export interface RootState {
  meta: MetaState
  photos: PhotosState
  music: MusicState
}
