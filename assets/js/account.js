//  ===== SIGN-IN =====
new Vue({
    el: '#app1',
    data: {
        errors1: [],
        errors2: [],
        user: '',
        pass: '',
        bugsuccess: false,
    },
    methods: {
        testdata1: function(e) {
            e.preventDefault();
            this.errors1 = [];
            this.errors2 = [];
            this.bugsuccess = false;

            if (this.user == '') {
                this.errors1.push('Vui lòng nhập tài khoản');
            } else if (this.user.length < 5) {
                this.errors1.push('Tài khoản không hợp lệ');
            }

            if (this.pass == '') {
                this.errors2.push('Vui lòng nhập mật khẩu');
            } else if (this.pass.length < 5) {
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

//  ===== SIGN-UP =====

new Vue({
    el: '#app2',
    data: {
        errors3: [],
        errors4: [],
        errors5: [],

        txtphone: '',
        txtpwd1: '',
        txtpwd2: '',

        bugsuccess: false,

    },
    methods: {
        testdata2: function(e) {
            e.preventDefault();
            this.errors3 = [];
            this.errors4 = [];
            this.errors5 = [];
            this.bugsuccess = false;

            if (this.txtphone == '') {
                this.errors3.push('Vui lòng nhập số điện thoại');
            } else if (this.txtphone.length >= 10) {
                this.errors3.push('Số điện thoại không hợp lệ');
            }

            if (this.txtpwd1 == '') {
                this.errors4.push('Vui lòng nhập mật khẩu');
            } else if (this.txtpwd1.length <= 6) {
                this.errors4.push('Mật khẩu phải từ 5 kí tự');
            }

            if (this.txtpwd2 == '') {
                this.errors5.push('Vui lòng nhập lại mật khẩu');
            } else if (this.txtpwd2 != this.txtpwd1) {
                this.errors5.push('Mật khẩu được nhập không khớp');
            }

            this.bugsuccess = true;
            return false;

        },
        displaybug: function() {
            if (this.bugsuccess == false) {
                return false;
            }
            if (this.errors3.length > 0 || this.errors4.length > 0 || this.errors5.length > 0) {
                return true;
            }
            return false;
        }
    }
});