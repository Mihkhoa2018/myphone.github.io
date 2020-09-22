new Vue({
    el: '#app',
    data: {
        errors1: [],
        errors2: [],
        user: '',
        pass: '',
        bugsuccess: false,
    },
    methods: {
        testdata: function(e) {
            e.preventDefault();
            this.errors1 = [];
            this.errors2 = [];
            this.bugsuccess = false;

            if (this.user == '') {
                this.errors1.push('Vui lòng nhập tài khoản');
            } else if (this.user < 5) {
                this.errors1.push('Tài khoản không hợp lệ');
            }

            if (this.pass == '') {
                this.errors2.push('Vui lòng nhập mật khẩu');
            } else if (this.pass < 5) {
                this.errors2.push('mật khẩu không hợp lệ');
            }

            this.bugsuccess = true;
            return false;
        },
        displaybug: function() {
            if (this.bugsuccess == false) {
                return false;
            }
            if (this.errors1.length > 0 || this.errors2.length > 0) {
                return true;
            }
            return false;
        }
    }
});