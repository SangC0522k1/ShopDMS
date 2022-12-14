package com.cg.repository;

import com.cg.model.User;
import com.cg.model.dto.ProductDTO;
import com.cg.model.dto.UserDTO;
import com.cg.model.dto.UserUpdateDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User getByUsername(String username);

    Optional<User> findByUsername(String username);


    @Query("SELECT NEW com.cg.model.dto.UserDTO (" +
                "u.id, " +
                "u.username" +
            ") " +
            "FROM User u " +
            "WHERE u.username = ?1"
    )
    Optional<UserDTO> findUserDTOByUsername(String username);


    Boolean existsByUsername(String username);

    @Query("SELECT NEW com.cg.model.dto.UserDTO (" +
            "u.id, " +
            "u.username, " +
            "u.fullName, " +
            "u.address, " +
            "u.phone, " +
            "u.role" +
            ") " +
            "FROM User u " +
            "WHERE u.deleted = false "
    )
    List<UserDTO> getAllUserWhereDeletedIsFalse();



    @Modifying
    @Query("UPDATE User AS u SET u.deleted = true WHERE u.id = :userId")
    void softDelete(@Param("userId") Long userId);
   }
