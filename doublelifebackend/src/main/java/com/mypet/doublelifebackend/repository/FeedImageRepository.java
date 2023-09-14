package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.FeedImageVO;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedImageRepository {

     FeedImageVO getImgNo(int f_img_no);

}
