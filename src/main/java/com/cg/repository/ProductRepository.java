package com.cg.repository;

import com.cg.model.Product;
import com.cg.model.dto.ProductDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

//    @Query("SELECT NEW com.cg.model.dto.ProductDTO(" +
//            "p.id, " +
//            "p.name, " +
//            "p.amount, " +
//            "p.price, " +
//            "p.description, " +
//            "p.avatar) FROM Product AS p")
//    List<ProductDTO> getAllProduct();

    @Modifying
    @Query("UPDATE Product AS c SET c.deleted = true WHERE c.id = :productId")
    void softDelete(@Param("productId") long productId);

    @Query("SELECT NEW com.cg.model.dto.ProductDTO(" +
            "p.id, " +
            "p.name, " +
            "p.amount, " +
            "p.price, " +
            "p.description, " +
            "p.avatar "+
            ") " +
            " FROM Product p " +
            "WHERE p.deleted = false "
    )


    List<ProductDTO> getAllProductDeleteFalse();
}
