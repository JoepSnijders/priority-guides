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
    state.guides.push(payload);
  },
  deleteGuide: (state, payload) => {
    console.log(payload, state);
    state.guides.splice(payload, 1);
  }
}

export const actions = {
  createGuide({ commit }, content) {
    commit('addGuide', content)
  },
  deleteGuide({ commit }, content) {
    console.log(content);

    commit('deleteGuide', content)
  }
}
