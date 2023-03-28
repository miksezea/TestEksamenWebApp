const baseUrl = "https://shoppingapimikse.azurewebsites.net/api/shoppingitems"

Vue.createApp({
    data() {
        return {
            shoppingitems: [],
            addData: { name: "", price: 0, quantity: 0 },
            totalValue: 0,
            deleteId: 0,
        }
    },
    methods: {
        getAllShoppingItems() {
            this.helperGetAndShow(baseUrl)
        },
        getTotalPrice() {
            const url = baseUrl + "/" + "Sum"
            totalValue = this.helperGetAndShow(url)
        },
        async helperGetAndShow(url) {
            try {
                const response = await axios.get(url, config)
                this.shoppingitems = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async deleteShoppingItem(deleteId) {
            const url = baseUrl + "/" + deleteId
            try {
                response = await axios.delete(url)
            } catch (ex) {
                alert(ex.message)
            }
        },
        async addShoppingItem() {
            try {
                response = await axios.post(baseUrl, this.addData)
            } catch (ex) {
                alert(ex.message)
            }
        }
    }
}).mount("#app")