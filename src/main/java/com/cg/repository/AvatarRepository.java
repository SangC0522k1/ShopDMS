package com.cg.repository;

import com.cg.model.Avatar;
import com.cg.model.dto.ProductDTO;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;
import java.util.List;

@Repository
public interface AvatarRepository extends JpaRepository<Avatar, String> {
}


