var vue = new Vue({
    el: '#login',
    data: {

        // Tạo biến quản lý lỗi là mảng rỗng
        errors1: [],
        errors2: [],

        // Tạo biến quản lý việc kiếm tra Ràng buộc dữ liệu (validation) hay chưa?
        // Mặc định là chưa kiểm tra
        kiemtraloixong: false,

        //tạo giá trị ban đầu
        user: '',
        pass: ''
    },
    methods: {
        Kiemtradulieu: function(e) {
            e.preventDefault();

            //loi chua xay ra
            this.errors1 = [];
            this.errors2 = [];
            this.kiemtraloixong = false;

            //kiem tra user
            if (this.user == "") {
                this.errors1.push('Vui lòng nhập tài khoản');

            }

            //kiem tra mat khau
            if (this.pass == "") {
                this.errors2.push('Vui lòng nhập mật khẩu');
            }

            this.kiemtraloixong = true;
            return false;
        },

        thongbaoloi1: function() {
            if (this.kiemtraloixong == false) {
                return false;
            }
            if (this.errors1.length > 0) {
                return true;
            }
            return false;
        },
        thongbaoloi2: function() {
            if (this.kiemtraloixong == false) {
                return false;
            }
            if (this.errors2.length > 0) {
                return true;
            }
            return false;
        },

        thongbao: function() {
            // Nếu chưa vượt qua bước kiểm tra lỗi thì không được hiển thị thông báo
            if (this.dakiemtraloixong == false) {
                return false;
            }
            // Nếu không có bất kỳ lỗi nào (mảng array lỗi là rỗng) => độ dài array == 0)
            // Không có lỗi => được hiển thị thông báo chào mừng
            if ((this.errors1.length == 0) || (this.errors2.length == 0)) {
                return true;
            }
            // Mặc định không hiển thị
            return false;
        }
    }
});