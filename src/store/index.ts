import { createStore } from 'vuex'
type imgData = {
    id: number,
    author: string,
    download_url: string,
    height: number,
    width: number,
    url: string
}
 const store = createStore({
    state: {
      count: 0,
      paths:[""],
    },
    mutations:{
        increment(state){
            return state.count++
        },
        decrement(state){
            return  state.count--
        },
        setPaths(state,paths){
             state.paths = paths
        },
        getPaths(state){
            return state.paths
        }
    },
    actions:{
        async getImagePaths(context){
            return new Promise((resolve,reject)=>{
                fetch('https://picsum.photos/v2/list?page=1&limit=20')
                .then(response => response.json())
                .then(data => {
                    context.commit('setPaths',data.map((item:imgData) => {return item.download_url}))
                    
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
            })
        }
    },
})
export default store