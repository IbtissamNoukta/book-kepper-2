<script>
import { reactive } from "vue";
import router from "../router";
export default {
    setup(){
      //mn7ajohch o mn7tajooch import dyalo from router-vue
      //const router = useRouter()
      const state = reactive ({
        book : {
            ref : "",
            title : "",
            description : ""
           },
        errorClass : "form-control is-invalid",
        validClass : "form-control is-valid",
      });
      function submitBook($event){
        //to not refresh(actualiser) form to click on it
        $event.preventDefault();
        //books kn3mroha bi books li fi locale storage ila mkn walo kn5liwh array vide 
        let books = JSON.parse(localStorage.getItem("books")) || [];
        //knzido fi books book li deja 3mrnah fi state
        books.push(state.book);
        //kn7tohom tani fi local storage 
        //kn7wlohom ljson
        localStorage.setItem("books", JSON.stringify(books));
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
    <div class="row">
            <div class="col-md-6 mx-auto my-4">
                <h3 class="border-bottom py-2">
                    Ajouter un livre
                </h3>
                <form @submit="submitBook">
                    <div class="form-group p-3">
                        <input type="text" class="form-control" 
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
</template>

<style scoped>

</style>
