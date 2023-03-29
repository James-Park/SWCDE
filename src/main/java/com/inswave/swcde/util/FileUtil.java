package com.inswave.swcde.util;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import websquare.WebSquareConfig;

public class FileUtil {

	public static void downloadFile(HttpServletResponse response, HttpServletRequest request, String filePath,
			String fileName) throws Exception {
		BufferedInputStream bis = null;
		BufferedOutputStream bos = null;

		try {
			deleteFile(filePath, fileName);
			compressZipFile(filePath, fileName);

			File file = new File(filePath + File.separator + fileName);
			if (file.isFile()) {
				int fileLength = (int) file.length();
				String header = request.getHeader("User-Agent");

				if (header.contains("MSIE") || header.contains("Trident")) {
					fileName = URLEncoder.encode(fileName, "UTF-8").replaceAll("\\+", "%20");
					response.setHeader("Content-Disposition", "attachment;filename=" + fileName + ";");
				} else {
					fileName = new String(fileName.getBytes("UTF-8"), "ISO-8859-1");
					response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");
				}

				response.setContentType("application/download; UTF-8");
				response.setContentLength(fileLength);
				response.setHeader("Content-Type", "application/octet-stream");
				response.setHeader("Content-Transfer-Encoding", "binary;");
				response.setHeader("Pragma", "no-cache;");
				response.setHeader("Expires", "-1;");
				response.setHeader("Content-Disposition", "attachment; filename=" + fileName);

				bis = new BufferedInputStream(new FileInputStream(file));
				bos = new BufferedOutputStream(response.getOutputStream());

				byte[] readByte = new byte[4096];

				while ((fileLength = bis.read(readByte)) > 0) {
					bos.write(readByte, 0, fileLength);
					bos.flush();
				}
			} else {
				throw new IOException();
			}
		} finally {
			if (bis != null) {
				try {
					bis.close();
				} catch (Exception ex) {
					ex.printStackTrace();
				}
			}

			if (bos != null) {
				try {
					bos.close();
				} catch (Exception ex) {
					ex.printStackTrace();
				}
			}
		}
	}

	public static void compressZipFile(String filePath, String fileName) throws Exception {
		String zipFile = filePath + File.separator + fileName;

		List<String> sourceFiles = new ArrayList<String>();
		getFilesInDir(sourceFiles, filePath);

		// ZipOutputStream을 FileOutputStream 으로 감쌈
		FileOutputStream fout = new FileOutputStream(zipFile);
		ZipOutputStream zout = new ZipOutputStream(fout);

		for (int i = 0; i < sourceFiles.size(); i++) {

			// 본래 파일명 유지, 경로제외 파일압축을 위해 new File로
			ZipEntry zipEntry = new ZipEntry(new File(sourceFiles.get(i)).getName());
			zout.putNextEntry(zipEntry);

			// 경로포함 압축
			// zout.putNextEntry(new ZipEntry(sourceFiles.get(i)));

			FileInputStream fin = new FileInputStream(sourceFiles.get(i));
			byte[] buffer = new byte[1024];
			int length;

			// input file을 1024바이트로 읽음, zip stream에 읽은 바이트를 씀
			while ((length = fin.read(buffer)) > 0) {
				zout.write(buffer, 0, length);
			}

			zout.closeEntry();
			fin.close();
		}

		zout.close();
	}

	private static void getFilesInDir(List<String> sourceFiles, String dirPath) {
		File dir = new File(dirPath);
		File files[] = dir.listFiles();

		for (int i = 0; i < files.length; i++) {
			File file = files[i];
			if (file.isDirectory()) {
				getFilesInDir(sourceFiles, file.getPath());
			} else {
				sourceFiles.add(file.getPath());
			}
		}
	}

	private static void deleteFile(String filePath, String fileName) {
		File file = new File(filePath + File.separator + fileName);
		if (file.exists()) {
			file.delete();
		}
	}
}
