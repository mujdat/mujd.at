import { MetaState } from '@/store/meta'
import { PhotosState } from '@/store/photos'

export interface RootState {
  meta: MetaState
  photos: PhotosState
}
