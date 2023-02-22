import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

/*
To have a CRUD of Companies, we will use a Composition API thing called Composable
it's kind of like a service in laravel

the standard name of the function of Composable is useSomething(), and it doesn't necessarily need to be the same as the filename.
 */
export default function useCompanies() {
    /*
    "ref"  is from Vue API to make any variable reactive anywhere
    */
    const companies = ref([])
    const company = ref([])
    const errors = ref('')

    /*
    using vue router
    */
    const router = useRouter()

    const getCompanies = async () => {
        let response = await axios.get('/api/companies')
        companies.value = response.data.data;
    }

    const getCompany = async (id) => {
        let response = await axios.get('/api/companies/' + id)
        company.value = response.data.data;
    }

    const storeCompany = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/companies/', data)
            await router.push({name: 'companies.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

        const updateCompany = async (id) => {
        errors.value = ''
        try {
            await axios.put('/api/companies/' + id, company.value)
            await router.push({name: 'companies.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const destroyCompany = async (id) => {
        await axios.delete('/api/companies/' + id)
    }


    return {
        companies,
        company,
        errors,
        getCompanies,
        getCompany,
        storeCompany,
        updateCompany,
        destroyCompany
    }
}
