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
    state.guides.splice(payload, 1);
  },
  createSection: (state, payload) => {
    console.log(payload, state)
    const newContent = {
      name: payload.name
    }

    // foundIndex.sections.push(newContent);
    console.log(state.guides[payload.id]);

    state.guides[payload.id].sections.push(newContent);

  }
}

export const actions = {
  createGuide({ commit }, content) {
    console.log(content);

    commit('addGuide', content)
  },
  deleteGuide({ commit }, content) {
    commit('deleteGuide', content)
  },
  createSection({ commit }, content) {
    commit('createSection', content)
  }
}
