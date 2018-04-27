var dict_bpf = {"55f2a9a4-fb9c-441b-855d-2a7c1a24d75c":"РП Сделка"};
var dict_bpf_MEO = {"aa19c3ee-195d-4b25-8e4d-636f026f9b1f":"1. Выявление потребности",
					"e28abbe3-27dc-c713-b91a-2ece95edc084":"2. Работа с возражениями",
					"cd02e291-9944-016d-3494-14cc79d0ad06":"3. Подписание договора",
					"6068e5d6-4451-a56a-3dd1-00a50003006e":"4. Требования на Внедрение"};

function Form_OnChange() {
    console.log("OnChange");
	Form_Block_Status();
	BPF_Stage();
}

function Form_OnSave() {
    console.log("OnSave");
	Form_Block_Status();
	BPF_Stage();
}

function Form_OnLoad() {
    console.log("OnLoad");
	Form_Block_Status();
	BPF_Stage();
}

function Form_Block_Status() {
	
	introd_meo = Xrm.Page.getAttribute("new_introd_meo").getValue();
	introd_dh = Xrm.Page.getAttribute("new_introd_dh").getValue();
	introd_mod = Xrm.Page.getAttribute("new_introd_moddi").getValue();
	introd_sxm = Xrm.Page.getAttribute("new_introd_simplexmed").getValue();
	//console.log("Value meo: " + introd_meo);
	//console.log("Value dh: " + introd_dh);
	//console.log("Value mod: " + introd_mod);
	//console.log("Value sxm: " + introd_sxm);
	////console.log(introd_meo !== "100000000") => true #Just example
		
		
	if (top.document.getElementById("opportunity|NoRelationship|Form|Mscrm.Form.opportunity.MarkAsWon") != null ) {

		if ((introd_meo !== "100000000") || (introd_dh !== "100000000") || (introd_mod !== "100000000") || (introd_sxm !== "100000000"))  {
			console.log("Point 1");
			top.document.getElementById("opportunity|NoRelationship|Form|Mscrm.Form.opportunity.MarkAsWon").style.display = "none";
			Xrm.Page.ui.setFormNotification("Для передачи на Внедрение - необходимо выбрать Продукт. ", "WARNING", "N1");
			
			/*
			Notification types^
			Xrm.Page.ui.setFormNotification("This is an INFORMATION notification.", "INFORMATION")
			Xrm.Page.ui.setFormNotification("This is a WARNING notification. ", "WARNING")
			Xrm.Page.ui.setFormNotification("This is an ERROR notification. ", "EROR")
			
			Produces the notification attached to the fax:
			Xrm.Page.getControl("fax").setNotification("This is a notification about the Fax field")
			
			To clear all notifications:
			Xrm.Page.ui.clearFormNotification()
			*/
		}
		else {
			console.log("Point 2");
			top.document.getElementById("opportunity|NoRelationship|Form|Mscrm.Form.opportunity.MarkAsWon").style.display = "true";
			Xrm.Page.ui.clearFormNotification("N1");
			Xrm.Page.ui.refreshRibbon();
		}
	}
	console.log("------------Form_Block_Status DONE------------");  
	
}

function BPF_Stage() {
	var processid = Xrm.Page.data.entity.attributes.get("processid").getValue();
	var stageid = Xrm.Page.data.entity.attributes.get("stageid").getValue();
	var statecode = Xrm.Page.data.entity.attributes.get("statecode").getValue();
	var stageid_field = Xrm.Page.data.entity.attributes.get("new_stagename");
	//stageid_field.setValue(dict_bpf_MEO[stageid]);
	
	console.log(processid);
    console.log(stageid);
    console.log(statecode);
	console.log("------------BPF_Stage DONE------------");    
}
