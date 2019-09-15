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
    const newSection = {
      name: payload.name
    }
    state.guides[payload.id].sections.push(newSection);
  },
  deleteSection: (state, payload) => {
    console.log(payload);

    state.guides[payload.id].sections.splice(payload.sectionIndex, 1);
  }
}

export const actions = {
  createGuide({ commit }, content) {
    const guide = {
      name: content.name,
      sections: []
    }
    commit('addGuide', guide)
  },
  deleteGuide({ commit }, content) {
    commit('deleteGuide', content)
  },
  createSection({ commit }, content) {
    commit('createSection', content)
  },
  deleteSection({ commit }, content) {
    commit('deleteSection', content)
  }
}
