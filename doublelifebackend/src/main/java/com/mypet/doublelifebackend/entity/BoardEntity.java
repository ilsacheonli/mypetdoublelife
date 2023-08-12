package com.mypet.doublelifebackend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="board")
@Table(name="board")
public class BoardEntity {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bno;

    @Column(nullable = false, length = 100)
    private String title;

    @Column(nullable = false, length = 30)
    private String writer;

    @Column(nullable = false)
    private String content;

    @ColumnDefault("0")
    private int viewCnt;

    @ColumnDefault("0")
    private int commentCnt;

    @ColumnDefault("0")
    private int hitCnt;

    @Column
    private Date regDate;

    @Column
    private Date updatedDate;

}
