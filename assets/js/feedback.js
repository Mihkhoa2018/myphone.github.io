new Vue({
    el: '#feedback-rb',
    data: {
        errors3: [],
        errors4: [],
        errors5: [],
        errors6: [],

        title_gopy: '',
        noidung_gopy: '',
        hoten_gopy: '',
        diachi_gopy: '',


        bugsuccess: false,

    },
    methods: {
        testdata2: function(e) {
            e.preventDefault();
            this.errors3 = [];
            this.errors4 = [];
            this.errors5 = [];
            this.errors6 = [];
            this.bugsuccess = false;

            if (this.title_gopy == '') {
                this.errors3.push('Vui lòng nhập tiêu đề');
            } else if (this.title_gopy.length < 10) {
                this.errors3.push('Vui lòng nhập tiêu đề hơn 10 kí tự');
            }

            if (this.noidung_gopy == '') {
                this.errors4.push('Vui lòng nhập góp ý');
            } else if (this.noidung_gopy.length <= 6) {
                this.errors4.push('góp ý phải lớn hơn 50 ký tự');
            }

            if (this.hoten_gopy == '') {
                this.errors5.push('Vui lòng nhập họ tên');
            }

            if (this.diachi_gopy == '') {
                this.errors6.push('Vui lòng nhập email');
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