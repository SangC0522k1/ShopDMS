class App {

    static DOMAIN_API = "http://localhost:8080";

    static BASE_URL_USER = this.DOMAIN_API + "/api/users";
    static BASE_URL_LOGIN = this.DOMAIN_API + "/api/auth";
    static BASE_URL_PRODUCT = this.DOMAIN_API + "/api/products";
    static BASE_CLOUDIARY_SERVER = "https://res.cloudinary.com/minhsang";
    static BASE_CLOUDIARY_IMAGE_URL = this.BASE_CLOUDIARY_SERVER + "/image/upload";
    static BASE_SCALE_IMAGE = "c_limit,w_150,h_100,q_100";
    static BASE_SCALE_IMAGE_INDEX = "c_limit,w_317,h_412,q_100";
    static BASE_SCALE_IMAGE_W300_H300_Q100 = "c_limit,w_300,h_300,q_100"

    static AlertMessageEn = class {

        static ERROR_400 = "The operation failed, please check the data again.";
        static ERROR_401 = "Unauthorized - Your access token has expired or is not valid.";
        static ERROR_403 = "Forbidden - You are not authorized to access this resource.";
        static ERROR_404 = "Not Found - The resource has been removed or does not exist";
        static ERROR_500 = "Internal Server Error - The server system is having problems or cannot be accessed.";
    }

    static AlertMessageVi = class {
        static SUCCESS_CREATED = "Tạo dữ liệu thành công !";
        static SUCCESS_UPDATED = "Cập nhật dữ liệu thành công !";
        static SUCCESS_DEACTIVATE = "Xóa sản phẩm thành công !";
        static SUCCESS_USER = "Vô Hiệu Hóa USER thành công !";

        static ERROR_400 = "Thao tác không thành công, vui lòng kiểm tra lại dữ liệu.";
        static ERROR_401 = "Unauthorized - Access Token của bạn hết hạn hoặc không hợp lệ.";
        static ERROR_403 = "Forbidden - Bạn không được quyền truy cập tài nguyên này.";
        static ERROR_404 = "Not Found - Tài nguyên này đã bị xóa hoặc không tồn tại";
        static ERROR_500 = "Internal Server Error - Hệ thống Server đang có vấn đề hoặc không truy cập được.";

    }

    static SweetAlert = class {

        static showAlertSuccess(t) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: t,
                showConfirmButton: false,
                timer: 2500
            })
        }

        static showAlertError(t) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: t,
                showConfirmButton: true
            })
        }

        static showSuspendedConfirmDialog() {
            return Swal.fire({
                icon: 'warning',
                text: 'Bạn có chắc chắn vô hiệu hóa không?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có,Tôi muốn!',
                cancelButtonText: 'Hủy bỏ',
            })
        }
    }

    static IziToast = class {
        static showSuccessAlert(m) {
            iziToast.success({
                title: 'OK',
                position: 'topRight',
                timeout: 2500,
                message: m
            });
        }

        static showErrorAlert(m) {
            iziToast.error({
                title: 'Error',
                position: 'topRight',
                timeout: 2500,
                message: m
            });
        }
    }

    static renderRowUser(obj) {
        let str = `
            <tr id="tr_${obj.id}">
                <td class="text-center">${obj.id}</td>
                <td class="text-center">${obj.fullName}</td>
                <td class="text-center">${obj.username}</td>
                <td class="text-center">${obj.phone}</td>
                <td class="text-center">${obj.address}</td>
                <td class="text-end num-space">${obj.role.code}</td>
                <td class="text-center">
                    <a class="btn btn-outline-secondary edit" data-id="${obj.id}" title="" data-bs-toggle="tooltip"  data-bs-original-title="cập Nhật">
                        <i class="fas fa-user-edit"></i>
                    </a>
                </td>
                <td class="text-center">
                    <a class="btn btn-outline-danger delete" data-id="${obj.id}" title="" data-bs-toggle="tooltip" data-bs-original-title="vô hiệu hóa">
                        <i class="fas fa-user-times"></i>
                    </a>
                </td>
            </tr>
        `;

        return str;
    }

    static renderRowProduct(obj,avatar) {
        let str = `
            <tr id="tr_${obj.id}">
                <td class="text-center">${obj.id}</td>
                <td class="text-center">${obj.name}</td>
                <td class="text-center">${obj.amount}</td>
                <td class="text-end num-space">
                ${new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(obj.price)}</td>
                <td class="text-center">${obj.description}</td>
                <td class="text-center num-space ">
                <img src="${this.BASE_CLOUDIARY_IMAGE_URL}/${this.BASE_SCALE_IMAGE}/${avatar.fileFolder}/${avatar.fileName}" alt="">
                </td>
                <td class="text-center">
                    <a class="btn btn-outline-secondary edit" data-id="${obj.id}" 
                        data-avatar-id = "${avatar.id}"
                                data-avatar-file-folder = "${avatar.fileFolder}"
                                data-avatar-file-name = "${avatar.fileName}"
                    title="" data-bs-toggle="tooltip"  data-bs-original-title="Cập Nhật">
                        <i class="fas fa-edit"></i>
                    </a>
                </td>
                <td class="text-center">
                    <a class="btn btn-outline-danger delete" data-id="${obj.id}" title="" data-bs-toggle="tooltip" data-bs-original-title="Xóa">
                        <i class="fas fa-trash-alt"></i>
                    </a>
                </td>
            </tr>
        `;

        return str;
    }

    static renderRowProductIndex(obj,avatar){
        let str = `
            <div class="col-3 mb-3">
                <div class="card product-card">
                    <div class="product-image">
                    <a class="card-img-top d-block overflow-hidden text-center" href="#">
                    <img width=100% height="250px" " alt="Product" src="${this.BASE_CLOUDIARY_IMAGE_URL}/${this.BASE_SCALE_IMAGE}/${avatar.fileFolder}/${avatar.fileName}">
                    </a>
            </div>
                    <div class="card-body py-2">
                        <h4 class="product-title fs-sm">${obj.name}</h4>
                        <div class="d-flex justify-content-between">
                            <div class="product-price"><h6>Giá:
                            ${new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(obj.price)}<h6></div>
                        </div>
                    </div>
                    <div class="card-body text-center"  style="display: flex">
                         <button type="button" id="card" class="btn btn-success" style="margin-left: 30px;">Thêm Vào Giỏ Hàng</button>
                    </div>
                </div>
            </div>
        `;

        return str;
    }
}

class User {
    constructor(id, fullName, username, phone, address, role) {
        this.id = id;
        this.fullName = fullName;
        this.username = username;
        this.phone = phone;
        this.address = address;
        this.role = role;
    }
}
class Product {
    constructor(id, name, amount, price, description, avatar) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.price = price;
        this.description = description;
        this.avatar = avatar;
    }
}
class Avatar {
    constructor(fileFolder, fileName) {
        this.fileFolder = fileFolder;
        this.fileName = fileName;
    }
}



