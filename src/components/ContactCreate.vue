<template>
  <div class="card mt-4 w-50 offset-3">
    <div class="card-header">
      <h3 class="text-center">Create Contact</h3>
    </div>
    <div class="card-body">
      <form @submit.prevent="onSubmit">
        <div class="form-group mt-2">
          <label>First Name</label>
          <input v-model="form.fname" class="form-control" required />
        </div>

        <div class="form-group mt-2">
          <label>Last Name</label>
          <input v-model="form.lname" class="form-control" required />
        </div>

        <div class="form-group mt-2">
          <label>Email</label>
          <input
            v-model="form.email"
            class="form-control"
            type="email"
            required
          />
        </div>

        <div class="form-group mt-2">
          <label>Contact Number</label>
          <input type="number" v-model="form.contactNumber" class="form-control" required />
        </div>

        <div class="form-group mt-2">
          <label>Address</label>
          <input v-model="form.address" class="form-control" required />
        </div>

        <div class="form-group mt-2">
          <label>Age</label>
          <input type="number" v-model="form.age" class="form-control" required />
        </div>
        <div class="form-group mt-2">
          <label>Birthday</label>
          <input type="date" v-model="form.birthday" class="form-control" required />
        </div>
        <div class="form-group mt-2">
        <label for="gender">Gender:</label>
          <div>
            <label>
              <input type="radio" id="female" name="gender" value="Female" v-model="form.gender" required> Female
            </label>
            &nbsp;
            <label>
              <input type="radio" id="male" name="gender" value="Male" v-model="form.gender" required> Male
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary form-control mt-3">
          Add Contact
        </button>
        <a href="/contacts" class="btn btn-secondary form-control mt-1">Back</a>
      </form>
    </div>
  </div>
</template>

<script>
import { createContact } from '@/firebase'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

export default {
  setup() {
    
    const router = useRouter()
    const form = reactive({ fname: '', lname: '', email: '', contactNumber: '', address: '', age: '', birthday: '', gender: '' })

    const onSubmit = async () => {
      await createContact({ ...form })
      router.push('/contacts')
      form.fname = ''
      form.lname = ''
      form.email = ''
      form.contactNumber = ''
      form.address = ''
      form.age = ''
      form.birthday = ''
      form.gender = ''
    }

    return {
      form, 
      onSubmit 
    }
  }
}
</script>
