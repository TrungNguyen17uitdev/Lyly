export interface Post {
  id: string
  caption: string
  reaction: { [userId: string]: Reaction }
}

export type Reaction = 'like' | 'dislike' | 'heart'
