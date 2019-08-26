export const state = () => ({
  guides: [
    {
      name: 'Home',
      goal: {
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, voluptas!'
      },
      sections: [
        {
          name: 'Hero',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, voluptas!'
        }
      ]
    }
  ]
})

export const getters = {
  getterValue: state => {
    return state.value
  }
}

export const mutations = {
  addGuide: (state, payload) => {
    console.log(payload);
    state.guides.push(payload);
  }
}

export const actions = {
  createGuide({ commit }, content) {
    commit('addGuide', content)
  }
}
