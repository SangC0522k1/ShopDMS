package com.cg.model.dto;

import com.cg.model.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Accessors(chain = true)
public class ProductAvatarDTO  {
    private Long id;

    private String name;

    @NotBlank(message = "Số lượng không được để trống!")
    @Pattern(regexp = "^[0-9]+$", message = "Số lượng phải là số nguyên dương!")
    private int amount;
    @NotBlank(message = "Giá không được để trống!")
    @Pattern(regexp = "^\\d*(\\.\\d+)?$", message = "Giá phải là số không được nhỏ hơn không!")
    private BigDecimal price;
    @NotBlank(message = "Thông tin sản phẩm không được để trống!")
    private String description;

    @NotBlank(message = "Ảnh không được để trống!")
    MultipartFile file;

    public Product toProduct(){
        return new Product()
                .setId(id)
                .setName(name)
                .setAmount(amount)
                .setPrice(price)
                .setDescription(description);
    }

}
