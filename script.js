console.log('js ok');



let emailList = [];

const app = new Vue({
    el: '#app',
    data: {
        emailList,
        emails: [],
    },
    methods: {
        singleMail() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function (response) {
                    const result = response.data;
                    const mail = result.response;
                    emailList.push(mail);
                });
            }
        },
    }

});
app.singleMail();








