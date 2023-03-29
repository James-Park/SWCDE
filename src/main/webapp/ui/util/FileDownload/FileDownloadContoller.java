package com.websquare.test;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class FileDownloadContoller {

	@RequestMapping(value = "/fileDownload", method = RequestMethod.POST)
	public void downloadPDFResource(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("xmlValue") String xmlValue) {
		
		System.out.println("xmlValue : " + xmlValue);
		
		// 위의 코드 실행 결과는 아래와 같습니다.
		// xmlValue : {"fetchSize":1000,"filePath":"","fileName":"excelDataDownTest","hearderColumns":["id","이름","e-mail","전화번호"],"dataColumns":["","","",""],"request":{"id":"","name":"","email":"","tel":""}}

		// xmlValue 문자열을 프로젝트 내부에서 사용하시는 JSON Convertor 이용해서 VO나 Map으로 변환하셔서 다운로드 받으실 파일 정로를 알아 내신 후
		// 아래 샘플 코드와 같이 response 객체에 파일 데이터 담아서 다운로드 하시기 바랍니다.
		
		/*
		Path file = Paths.get(dataDirectory, fileName);
		if (Files.exists(file)) {
			response.setContentType("application/pdf"); // 다운로드 받을 파일의 포맷에 맞게 설정해야 합니다.
			response.addHeader("Content-Disposition", "attachment; filename=" + fileName);
			try {
				Files.copy(file, response.getOutputStream());
				response.getOutputStream().flush();
			} catch (IOException ex) {
				ex.printStackTrace();
			}
		}
		*/
	}

}