import api from '../api'

export const hubList = (list) => ({
    type:'HUB_LIST',
    list
})

export const lists = credentials => (dispatch) => api.HubList_API.hubs(credentials).then(li=>dispatch(hubList(li)))