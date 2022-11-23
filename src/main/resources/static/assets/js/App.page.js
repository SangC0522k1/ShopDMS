class AppPage {
    static renderProductItem(obj) {
        return `
        <div class="card mx-3 col-3" style="padding: 0;width: 22%">
  <img src=${obj.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj.name}</h5>
    <p class="card-text">${new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(obj.price)}</p>
    <button type="button" class="btn btn-cart" style="background-color: #f8d7da">Thêm Vào Giỏ</button>
  </div>
</div>
        `
    }
}