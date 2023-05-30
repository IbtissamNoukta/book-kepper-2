<script>
import { reactive, onMounted } from "vue"
import { RouterLink } from 'vue-router'

import { useCounterStore } from '@/stores/counter'


export default {
    setup(){
      //pinia
      // const counter = useCounterStore();
      // counter.increment();
      
      const state = reactive({
        books: [],
        
      });
      function getBooks() {
        state.books= JSON.parse(localStorage.getItem("books"));
      };
      function removeBook(book){
        const currentBooks = state.books;
        //knfiltrer ga3 lktoba li ref dyalhom makisawich ref dyl book
        //item hiya kola book fi currentbooks
        const updatedBooks = currentBooks.filter((item) => item.ref !== book.ref)
        //kn7tohom fi local storage "books"
        localStorage.setItem("books", JSON.stringify(updatedBooks));
        getBooks();
      };
      onMounted(()=> { getBooks(); });
      
      return{
        state,
        removeBook,
        //counter
      }
    }
}
</script>

<template>
  <div class="container">
    
    <!-- <button @click="counter.increment">increment</button>
    
    {{ counter.count }} -->
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Ref</th>
      <th scope="col">title</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(book, index) in state.books" :key="index" >
      <th scope="row">{{ book.ref }}</th>
      <td>{{ book.title }}</td>
      <td>{{ book.description }}</td>
      <td>
        <div class="d-flex flex-row align-items-center">
          <RouterLink :to="{name:'UpdateBook' ,params: {id: book.ref} }" class="btn btn-warning me-2">
            <i class="fas fa-edit"></i>
          </RouterLink>
          <span class="btn btn-danger" @click="removeBook(book)">
            <i class="fas fa-trash"></i>
          </span>
        </div>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<style scoped>

</style>
