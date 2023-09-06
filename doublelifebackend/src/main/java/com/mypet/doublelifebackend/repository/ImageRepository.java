package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.ImageVO;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository {

    ImageVO getImgByNumber(int imgNo);

    void imgInsert(ImageVO imageVO);
    void imgUpdate(ImageVO imageVO);
    void imgDelete(int imgNo);

    int getLastNumber();
}
