package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.FeedImageVO;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedImageRepository {
     FeedImageVO getImgNo(int f_img_no);
        //return null; 여기왜 눌인가요? //이거 안하면 에러떠요... 그리고 static도...
        //동환님 코드에 static 명시 안돼있어서 안썼는데 저거 안해줬다고 머더라.. 암튼 선언 하라고 자꾸 뜨길래 해줬습니다.
            // 이러면 에러 안뜰거에요
    // 근데 저 설마 방금 세미콜론 빼먹은건가요..?
    // 그거말고 여기는 인터페이스라 안에 함수내용을 집어넣는곳이 아니라서 이렇식으로 내용집어넣을려고하면 안될거에요
    // getImgNo 이게 매퍼보면 저친구를 함수형으로 선언해주도록 도와주는거라 생각하면 될거엥요
    // 아하 이미 함수형으로 불러와서 걍 저렇게만 선언하는군요..
    // ㅖㅖ 선언해주는거라 생각하면 편할거에요

}
