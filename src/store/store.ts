import { TStore } from '../types/store.type';
import { create } from 'zustand';
import { IUser } from '../interfaces/user.interface';
import { IPost } from '../interfaces/post.interface';

export const useStore = create<TStore>()(set => ({
    userSlice: {
        users: [],
        loadUsers: (users: IUser[]) => {
            return set(state => {
                return {
                    ...state,
                    userSlice: {
                        ...state.userSlice,
                        users
                    }
                };
            });
        },
        selectedUser: null,
        selectUser: (selectedUser: IUser) => {
            return set(state => {
                return {
                    ...state,
                    userSlice: {
                        ...state.userSlice,
                        selectedUser
                    }
                }
            })
        }
    },
    postSlice: {
        posts: [],
        loadPosts: (posts: IPost[]) => {
            return set(state => {
                return {
                    ...state,
                    postSlice: {
                        ...state.postSlice,
                        posts
                    }
                }
            })
        },
        selectedPost: null,
        selectPost: (selectedPost: IPost) => {
            return set(state => {
                return {
                    ...state,
                    postSlice: {
                        ...state.postSlice,
                        selectedPost
                    }
                }
            })
        },
    }
}));