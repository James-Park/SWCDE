package com.inswave.swcde.sample.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/restful")
public class RestfulController {

	@RequestMapping(method = RequestMethod.GET, value = "/testJsonMap2", params = {"procId", "subId", "name", "tel"})
	public @ResponseBody Map<String, Object> testJsonMap2(@RequestParam("procId") String procId, @RequestParam("subId") String subId, 
			@RequestParam("name") String name, @RequestParam("tel") String tel) {
		
		System.out.println(String.format("procId = %s, subId = %s, name = %s, tel = %s", procId, subId, name, tel));
		
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
	
	@RequestMapping(method = RequestMethod.GET, value = "/testJsonMap3/{procId}/{subId}", params = {"name", "tel"})
	public @ResponseBody Map<String, Object> testJsonMap3(@PathVariable("procId") String procId, @PathVariable("subId") String subId,
			@RequestParam("name") String name, @RequestParam("tel") String tel) {
		System.out.println(String.format("procId = %s, subId = %s, name = %s, tel = %s", procId, subId, name, tel));
		
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

}
