package com.inswave.swcde.sample.controller;

import java.io.*;
import java.util.*;
import java.net.URLEncoder;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.inswave.swcde.util.FileUtil;

@Controller
@RequestMapping(value = "/util")
public class UtilController {
	

	@Autowired
	ServletContext context;
	
	@RequestMapping(method = RequestMethod.GET, value = "/downloadZipFile.do", params = { "filePath", "fileName" } )
	public void downloadZipFile(HttpServletRequest request, HttpServletResponse response, @RequestParam("filePath") String filePath, 
			@RequestParam("fileName") String fileName) throws Exception {
		try {
			String fileRealPath = context.getRealPath(filePath);
			
			if (filePath.equals("") || filePath.equals("/") || filePath.contains("..") || !filePath.contains("/ui")) {
				response.setContentType("text/html");
				response.setCharacterEncoding("UTF-8");
				response.getWriter().write("<html><head></head><body><div>File 경로가 올바르지 않습니다.</div></body></html>");
				return; 
			};
			
			FileUtil.downloadFile(response, request, fileRealPath, fileName);
		} catch (Exception ex) {
			response.setContentType("text/html");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write("<html><head></head><body><div>파일이 존재하지 않습니다.</div></body></html>");
		}
	}
}
