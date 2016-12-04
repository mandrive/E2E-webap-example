export const postsEpic = post$ =>
                    post$.filter(action => action.type = 'FETCH_POSTS')
                    .
