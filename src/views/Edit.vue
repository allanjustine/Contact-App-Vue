<template>
  <div class="card mt-4 w-50 offset-3">
    <div class="card-header">
      <h3 class="text-center">Edit Contact</h3>
    </div>
    <div class="card-body">
      <form @submit.prevent="update">
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
          Update Contact
        </button>
        <a href="/contacts" class="btn btn-secondary form-control mt-1">Cancel</a>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getContact, updateContact } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const contactId = computed(() => route.params.id)

    const form = reactive({ fname: '', lname: '', email: '', contactNumber: '', address: '', age: '', birthday: '', gender: '' })
    onMounted(async () => {
      const contact = await getContact(contactId.value)
      console.log(contact, contactId.value)
      form.fname = contact.fname
      form.lname = contact.lname
      form.email = contact.email
      form.contactNumber = contact.contactNumber
      form.address = contact.address
      form.age = contact.age
      form.birthday = contact.birthday
      form.gender = contact.gender
    })

    const update = async () => {
      await updateContact(contactId.value, { ...form })
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
      update 
    }
  }
}
</script>
