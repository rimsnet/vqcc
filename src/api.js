import axios from 'axios'

export default {
    HubList_API: {
        hubs: (credintial) => axios.get('/api/thing/find/all/1').then(res => res.data)
    },
    SingleHub_API: {
        hub: []
    }
}