var dict_bpf = {"9d8152bc-eed9-4fea-9c04-56dc2997ddee":"РП Внедрение ПБЧ", 
				"cc722004-630b-4c68-aad9-28c1e3a1f439":"РП Внедрение МИС"};
					
var dict_bpf_MEO = {"572cf52a-2608-4050-a9ae-faf3b392f48c":"1. Формирование требований",
					"857b912d-0c61-40c9-0b4a-61ea960e378e":"2. Внедрение",
					"9e64b9d4-a54a-e496-a5a2-c1e950d7c10b":"3. Подготовка к запуску",
					"1eba29c2-a926-5bda-7dc7-d7e421216660":"4. Запуск"};
					
var dict_bpf_MIS = {"395872bb-53b5-44cf-aa73-31a8b7d24462":"1. Презентация системы",
					"5f852729-6087-41cf-9439-d0b5d58f2edb":"2. Формирование требований",
					"0c81801e-2581-4601-a693-f7758b23f82a":"3. Опосредованная аналитика",
					"c75607a9-82a3-4897-b99c-71bc53152c90":"4. Построение информационной инфраструктуры",
					"957ac982-9709-a02a-b124-8552122e2a69":"5. Подробная аналитика",
					"373cc3a9-00ce-ee71-43a5-039862ad2617":"6. Дополнительная настройка системы",
					"7d9652ab-1221-9042-2711-de8908e89c6a":"7. Внедрение"};
					
function Form_OnLoad() {
	BPF_Stage();
	Hide_BPF_Fields();
}
function Form_OnSave() {
    BPF_Stage();
	Hide_BPF_Fields();
}


function BPF_Stage() {
	var processid = Xrm.Page.data.entity.attributes.get("processid").getValue();
	var stageid = Xrm.Page.data.entity.attributes.get("stageid").getValue();
	var statecode = Xrm.Page.data.entity.attributes.get("statecode").getValue();
	
	var stageid_field = Xrm.Page.data.entity.attributes.get("new_bpf_stage");
	var processname_field = Xrm.Page.data.entity.attributes.get("new_bpf_name");
	
	
	if (dict_bpf[processid] == "РП Внедрение ПБЧ") {
		stageid_field.setValue(dict_bpf_MEO[stageid]);
		processname_field.setValue(dict_bpf[processid]);
	}
	else if (dict_bpf[processid] == "РП Внедрение МИС") {
		stageid_field.setValue(dict_bpf_MIS[stageid]);
		processname_field.setValue(dict_bpf[processid]);
	}
	else {
		console.log("Wrong process")	
	}
	
	//console.log(processid);
    //console.log(stageid);
    //console.log(statecode);
	console.log("------------BPF_Stage DONE------------");    
}

function Hide_BPF_Fields() {
	var product = Xrm.Page.getAttribute("new_introd").getValue();
	// Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_19").setVisible(false);
	if (product == "100000000") {
		console.log("Point 1");
		
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_3").setVisible(true);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_5").setVisible(true);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_7").setVisible(true);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_10").setVisible(true);
		
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_17").setVisible(false);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_16").setVisible(false);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_15").setVisible(false);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_14").setVisible(false);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_13").setVisible(false);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_12").setVisible(false);
	}
	else if ((product == "100000001") || (product == "100000002") || (product == "100000003")) {
		console.log("Point 2");
			
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_17").setVisible(true);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_16").setVisible(true);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_15").setVisible(true);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_14").setVisible(true);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_13").setVisible(true);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_12").setVisible(true);
		
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_3").setVisible(false);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_5").setVisible(false);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_7").setVisible(false);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_10").setVisible(false);
		
	}
	else {
		console.log("Point 3");
		
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_10").setVisible(true);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_3").setVisible(true);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_5").setVisible(true);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_7").setVisible(true);
		
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_17").setVisible(true);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_16").setVisible(true);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_15").setVisible(true);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_14").setVisible(true);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_13").setVisible(true);
		Xrm.Page.ui.tabs.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}").sections.get("{0fd8be76-dbab-4c5f-8fb2-4a5d86972a6b}_section_12").setVisible(true);
	}
}

