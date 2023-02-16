<style>
@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
<template>
  <div class="card border-0 mt-4 p-2">
    <div class="mb-3 mt-2">
      <a class="btn btn-primary d-flex justify-content-end float-end" href="/create-contact">Add New Contact</a>
    </div>
    <table class="table table-hover border table-striped m-0">
      <thead class="bg-light">
        <tr>
          <th scope="col">First Nme</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Contact Number</th>
          <th scope="col">Address</th>
          <th scope="col">Age</th>
          <th scope="col">Birthdate</th>
          <th scope="col">Gender</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, fname,lname, email, contactNumber, address, age, birthday, gender } in contacts" :key="id">
          <td>{{ fname }}</td>
          <td>{{ lname }}</td>
          <td>{{ email }}</td>
          <td>{{ contactNumber }}</td>
          <td>{{ address }}</td>
          <td>{{ age }}</td>
          <td>{{ formatDate(birthday) }}</td>
          <td>{{ gender }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteContact(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="noContacts" class="text-center m-2">
      <p style="border: 2px dotted rgb(195, 195, 179); border-top: 5px solid gray; margin-left: 48%; border-radius: 50%; width: 40px; height: 40px; animation: rotate 0.8s linear infinite;"></p>
      <p>Loading please be patient <br> or <br> No data found please add some data.</p>
    </div>
  </div>
</template>

<script>
import { useLoadContacts, deleteContact } from '@/firebase'

export default {
  setup() {
    const contacts = useLoadContacts()
    function formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en-US', options)
    }
    return { 
      contacts, 
      deleteContact,
      formatDate
    }
  },
  computed: {
    noContacts() {
      return this.contacts.length === 0
    }
  }
}
</script>
