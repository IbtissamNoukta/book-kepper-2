<script>
import { reactive, onMounted } from "vue";
import router from "../router";

import { useRoute } from 'vue-router'

export default {
    setup(){
      //mn7ajohch o mn7tajooch import dyalo from router-vue
      //const router = useRouter()
      const route = useRoute();
      const state = reactive ({
        book : {
            ref : "",
            title : "",
            description : ""
           },
        errorClass : "form-control is-invalid",
        validClass : "form-control is-valid",
      });
      onMounted(() => {
        const ref = route.params.id;
        const books = JSON.parse(localStorage.getItem("books"));
        const book = books.find((item) => item.ref == ref);
        state.book = book;
      });
      function submitBook($event){
        //to not refresh(actualiser) form to click on it
        $event.preventDefault();
        let books = JSON.parse(localStorage.getItem("books"));

        const updatedBooks = books.filter((item) => item.ref !== state.book.ref);
        //updatedBooks kn3mroha bi books li fi locale storage ila mkn walo kn5liwh array vide 
        
        //knzido fi updatedbooks book li deja 3mrnah fi state
        updatedBooks.push(state.book);
        //kn7tohom tani fi local storage 
        //kn7wlohom ljson
        localStorage.setItem("books", JSON.stringify(updatedBooks));
        //kn5wo input
        state.book = {
            ref : "",
            title : "",
            description : ""
        };
        //knrj3o lhome
        router.push("/");
      }
      return {
        state,
        submitBook
      }
    }
}
</script>

<template>
  <div class="container">
    <div class="container">
    <div class="row">
            <div class="col-md-6 mx-auto my-4">
                <h3 class="border-bottom py-2">
                    Modifier un livre
                </h3>
                <form @submit="submitBook">
                    <div class="form-group p-3">
                        <input type="text" class="form-control" disabled
                        v-model="state.book.ref"
                        :class="state.book.ref.length ? state.validClass : state.errorClass"
                        placeholder="ref">
                    </div>
                    <div class="form-group p-3">
                        <input type="text" class="form-control" 
                        v-model="state.book.title"
                        :class="state.book.title.length ? state.validClass : state.errorClass"
                        placeholder="titre">
                    </div>
                    <div class="form-group p-3">
                        <textarea cols="30" rows="5" class="form-control"
                        v-model="state.book.description"
                        :class="state.book.description.length ? state.validClass : state.errorClass"
                         placeholder="description"></textarea>
                    </div>
                    <div class="form-group p-3">
                        <button :disabled="!state.book.ref || !state.book.title || !state.book.description " 
                          type ="submit" class="btn btn-primary">
                            Valider
                        </button>
                    </div>
                </form>
            </div>
        </div>
  </div>
  </div>
</template>