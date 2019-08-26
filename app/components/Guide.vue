<template>
  <div class="guide">
    <div class="guide__header">
      <span class="guide__pagename">{{ data.name }}</span>
      <span class="guide__header__edit" @click.prevent="removeGuide(id)">Delete</span>
    </div>
    <div class="guide__inner">
      <div class="guide__goal">
        <div class="guide__goal__header">
          <span>Goal</span>
          <span class="guide__goal__header__edit">Edit</span>
        </div>
        <p v-if="data.goal">{{ data.goal.content }}</p>
        <p v-else class="guide__item__temp">Add a goal</p>
      </div>
      <div class="guide__list" v-if="data.sections">
        <div class="guide__item" v-for="(section, index) in data.sections" :key="index">
          <div class="guide__item__header">
            <span>{{ section.name }}</span>
            <span class="guide__item__header__edit">Edit</span>
          </div>
          <p v-if="section.content.length">{{ section.content }}</p>
          <p v-else class="guide__item__temp">Add content...</p>
        </div>
      </div>
      <button class="guide__add button button--bordered" role="button" aria-label="Add item" @click.prevent="createSection">Add row</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      sections: [
        {
          name: 'Hero',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, voluptas!'
        }
      ]
    }
  },
  methods: {
    removeGuide(id) {
      if (confirm("Are you sure you want to delete the guide?")) {
        this.$store.dispatch('deleteGuide', id);
        // API Request
      }
    },
    createSection() {
      const name = prompt('Please enter a name for your section:', '');
      if (name == null || name == '') return

      // Create Section
      const section = {
        name,
        content: ''
      }
      this.sections.push(section);

      // API Request
    }
  },
}
</script>

<style lang="scss">
.guide {
  margin-right: 2rem;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: .5rem;

    text-transform: capitalize;

    &__edit {
      display: none;
      opacity: .6;
      font-size: .85rem;
      font-weight: bold;
      cursor: pointer;
    }
  }
  &__pagename {
    color: #999;
  }
  &__inner {
    width: 400px;
    padding: 1rem;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  &__goal {
    background: #F7F7FA;
    padding: 1rem;
    border-radius: 4px;

    font-size: .85rem;
    line-height: 1.3;
    cursor: pointer;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: .25rem;

      font-size: 1rem;
      font-weight: bold;

      text-transform: capitalize;

      &__edit {
        display: none;
        opacity: .6;
        font-size: .8rem;
      }
    }

    &:hover {
      .guide__goal__header__edit {
        display: inline-block;
      }
    }
  }
  &__list {
    margin: 1rem 0;
  }
  &__item {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;

    font-size: .85rem;
    line-height: 1.3;

    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: .25rem;

      font-size: 1rem;
      font-weight: bold;
      text-transform: capitalize;

      &__edit {
        display: none;
        opacity: .6;
        font-size: .8rem;
      }
    }

    &__temp {
      opacity: .5;
    }

    &:hover {
      .guide__item__header__edit {
        display: inline-block;
      }
    }
  }
  &__add {
    width: 100%;
  }

  &:hover {
    .guide__header__edit {
      display: inline-block;
    }
  }
}
</style>
