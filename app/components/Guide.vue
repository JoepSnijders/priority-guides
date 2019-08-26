<template>
  <div class="guide">
    <div class="guide__header">
      <span class="guide__pagename">Home</span>
    </div>
    <div class="guide__inner">
      <div class="guide__goal">
        <div class="guide__goal__header">
          <span>Goal</span>
          <span class="guide__goal__header__edit">Edit</span>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, voluptas!</p>
      </div>
      <div class="guide__list">
        <div class="guide__item">
          <div class="guide__item__header">
            <span>Hero</span>
            <span class="guide__item__header__edit">Edit</span>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, voluptas!</p>
        </div>
      </div>
      <button class="guide__add button button--bordered" role="button" aria-label="Add item">Add row</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.guide {
  margin-right: 2rem;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: .5rem;
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

      &__edit {
        display: none;
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

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: .25rem;

      font-size: 1rem;
      font-weight: bold;

      &__edit {
        display: none;
        font-size: .8rem;
      }
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
}
</style>
