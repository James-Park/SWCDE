package com.inswave.swcde.sample.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.inswave.swcde.sample.beans.DataBean;
import com.inswave.swcde.sample.beans.HeaderBean;
import com.inswave.swcde.sample.beans.ParamBean;
import com.inswave.swcde.sample.beans.UserBean;

@Controller
@RequestMapping(value = "/test")
public class TestController {

	@RequestMapping(value = "/testJsonMap.do", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> testJsonMap(@RequestBody Map<String, Object> param) {

		System.out.println("Param Data : " + param);

		Map<String, Object> result = new HashMap<String, Object>();

		List<Object> userList = new ArrayList<Object>();

		Map<String, Object> header = new HashMap<String, Object>();
		header.put("resultCode", "001");
		header.put("resultMessage", "성공했습니다.");

		Map<String, Object> user1 = new HashMap<String, Object>();
		user1.put("id", "001");
		user1.put("name", "홍길동");
		user1.put("tel", "010-4232-7431");
		userList.add(user1);

		Map<String, Object> user2 = new HashMap<String, Object>();
		user2.put("id", "002");
		user2.put("name", "허균");
		user2.put("tel", "010-4421-5421");
		userList.add(user2);

		result.put("header", header);
		result.put("data", userList);

		return result;
	}

	@RequestMapping("/testJsonMap.do")
	public @ResponseBody Map<String, Object> testJsonMap() {
		Map<String, Object> result = new HashMap<String, Object>();

		List<Object> userList = new ArrayList<Object>();

		Map<String, Object> header = new HashMap<String, Object>();
		header.put("resultCode", "001");
		header.put("resultMessage", "성공했습니다.");

		Map<String, Object> user1 = new HashMap<String, Object>();
		user1.put("id", "001");
		user1.put("name", "홍길동");
		user1.put("tel", "010-4232-7431");
		userList.add(user1);

		Map<String, Object> user2 = new HashMap<String, Object>();
		user2.put("id", "002");
		user2.put("name", "허균");
		user2.put("tel", "010-4421-5421");
		userList.add(user2);

		result.put("header", header);
		result.put("data", userList);

		return result;
	}

	@RequestMapping(value = "/testJsonVO.do", method = RequestMethod.POST)
	public @ResponseBody DataBean<UserBean> testJsonVO(@RequestBody ParamBean<UserBean> param) {
		
		System.out.println("param.getParam()).getName() : " + ((UserBean) param.getParam()).getName());
		
		DataBean<UserBean> data = new DataBean<UserBean>();

		List<UserBean> userList = new ArrayList<UserBean>();

		HeaderBean header = new HeaderBean();
		header.setResultCode("001");
		header.setResultMessage("성공했습니다.");

		UserBean user1 = new UserBean();
		user1.setId("001");
		user1.setName("홍길동");
		user1.setTel("010-4232-7431");
		userList.add(user1);

		UserBean user2 = new UserBean();
		user2.setId("002");
		user2.setName("허균");
		user2.setTel("010-4421-5421");
		userList.add(user2);

		data.setHeader(header);
		data.setData(userList);

		return data;
	}

	@RequestMapping("/testJsonVO.do")
	public @ResponseBody DataBean<UserBean> testJsonVO() {
		DataBean<UserBean> data = new DataBean<UserBean>();

		List<UserBean> userList = new ArrayList<UserBean>();

		HeaderBean header = new HeaderBean();
		header.setResultCode("001");
		header.setResultMessage("성공했습니다.");

		UserBean user1 = new UserBean();
		user1.setId("001");
		user1.setName("홍길동");
		user1.setTel("010-4232-7431");
		userList.add(user1);

		UserBean user2 = new UserBean();
		user2.setId("002");
		user2.setName("허균");
		user2.setTel("010-4421-5421");
		userList.add(user2);

		data.setHeader(header);
		data.setData(userList);

		return data;
	}

}