import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {

  apiKey: "AIzaSyAU8C54W1DJ2uZvdPpYS91Jjx1t-PbtnpY",

  authDomain: "my-project-b4cc7.firebaseapp.com",

  projectId: "my-project-b4cc7",

  storageBucket: "my-project-b4cc7.appspot.com",

  messagingSenderId: "143686264023",

  appId: "1:143686264023:web:59b94f1f82a59ed8a43c92",

  measurementId: "G-JTMB3Q0LGN"

}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const contactsCollection = db.collection('contacts')

export const createContact = contact => {
  return contactsCollection.add(contact)
}

export const getContact = async id => {
  const contact = await contactsCollection.doc(id).get()
  return contact.exists ? contact.data() : null
}

export const updateContact = (id, contact) => {
  return contactsCollection.doc(id).update(contact)
}

export const deleteContact = id => {
  return contactsCollection.doc(id).delete()
}

export const useLoadContacts = () => {
  const contacts = ref([])
  const close = contactsCollection.onSnapshot(snapshot => {
    contacts.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return contacts
}
