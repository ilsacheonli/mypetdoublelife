package com.mypet.doublelifebackend.service;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import com.mypet.doublelifebackend.repository.ImageRepository;

import com.mypet.doublelifebackend.vo.ImageVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;


@Service
public class ImageService {
    @Autowired
    private ImageRepository imageRepository;

    private final String imgUploadPath = "mypetdoublelife/doublelifebackend/src/main";

    public ImageVO getImageByNum(int imgNo){

        return imageRepository.getImgByNumber(imgNo);
    }


    public int insertImage() throws IOException {

        //저장할 파일경로 지정
        String absolutePath = new File(imgUploadPath+"/resources/static/images/").getAbsolutePath();


        // UUID로 랜덤으로 이름 생성
        String newImageName = UUID.randomUUID().toString() + ".png";

        // 마지막 이미지 번호+1
        int last_img_num = imageRepository.getLastNumber();

        ImageVO imageVO = new ImageVO(
            last_img_num,
            "default.png",
            "default.png",
            absolutePath
        );

        // imgInsert
        imageRepository.imgInsert(imageVO);

        // 파일을 전송하기
        File file = new File(absolutePath + "/" + newImageName);
        if (!file.exists()) {
            file.mkdirs();
        }

         return last_img_num;
    }


    public int updateImage(MultipartFile image, int update_img_Num, String directory) throws IOException {

        //저장할 파일경로 지정
        String absolutePath = new File(imgUploadPath+"/resources/static/images/"+directory).getAbsolutePath();


        // 확장자 추출
        if (!image.isEmpty()) {
            String contentType = image.getContentType();
            String originalImageExtension;
            if (!StringUtils.hasText(contentType)) {

                return 0;
            }else{
                if (contentType.contains("image/jpeg")) {
                    originalImageExtension = ".jpg";
                } else if (contentType.contains("image/jpg")) {
                    originalImageExtension = ".jpg";
                } else if (contentType.contains("image/png")) {
                    originalImageExtension = ".png";
                } else {

                    return 0;
                }
            }


            ImageVO imageVO = getImageByNum(update_img_Num);

            //파일 경로 지정
            String del_image_path = imageVO.getImgPath()+"/"+imageVO.getNewImgName();

            //현재 게시판에 존재하는 파일객체를 만듬
            File delete_file = new File(del_image_path);

            // 파일이 존재하고 default.png가 아닐경우 파일 삭제
            if(delete_file.exists()) {
                if(!imageVO.getOriginImgName().equals("default.png"))
                    delete_file.delete();
            }else{
                return 0;
            }


            // UUID로 랜덤으로 이름 생성
            String newImageName = UUID.randomUUID().toString() + originalImageExtension;

            // 파일을 전송하기
            File update_file = new File(absolutePath + "/" + newImageName);
            if (!update_file.exists()) {
                update_file.mkdirs();
            }

            ImageVO update_imageVO = new ImageVO(
                    update_img_Num,
                    image.getOriginalFilename(),
                    newImageName,
                    absolutePath);

            // imgUpdate
            imageRepository.imgUpdate(update_imageVO);

            image.transferTo(update_file);

            return update_img_Num;
        }

        return update_img_Num;
    }

    public int deleteImage(int del_img_Num) throws IOException {

        ImageVO del_imageVO = getImageByNum(del_img_Num);

        //파일 경로 지정
        String del_image_path = del_imageVO.getImgPath()+"/"+del_imageVO.getNewImgName();

        //현재 게시판에 존재하는 파일객체를 만듬
        File delete_file = new File(del_image_path);

        // 파일이 존재하고 default.png가 아닐경우 파일 삭제
        if(delete_file.exists()) {
            if(!del_imageVO.getOriginImgName().equals("default.png"))
                delete_file.delete();
        }else{
            return 0;
        }


        // imgDelete
        imageRepository.imgDelete(del_img_Num);

        return del_img_Num;

    }

}
