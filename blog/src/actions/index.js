import jsonPlaceHolder from '../apis/jsonPlaceHolder'
export const fetchPost = () => {
    // bad structcer avoid using this
    const response = await jsonPlaceHolder.get('/posts');
    return {
       type: 'FETCH_POSTS',
       payload: response.json(),
    }
}