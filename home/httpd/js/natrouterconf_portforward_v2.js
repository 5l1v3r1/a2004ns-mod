<script>

function DelPortForward_V2(name,mode,e)
{
	ClickLineCheck(e);
	if(mode == 'user')
		var F = document.portforward_iframe_fm;
	else if(mode == 'upnp')
		var F = document.upnp_iframe_fm;
	else return;

	var doc = parent.document.portforward_fm;
	if(confirm(PORTFORWARD_RULE_DELETE)){
		doc.clicked_bg.value = '';
		doc.clicked_name.value = '';
		if(mode == 'user')
			All_Clear_Portforward_Mainform(doc);
		else if(mode == 'upnp')
			All_Clear_Upnp_Mainform(doc);
		F.act.value = 'del';
		F.rmcheck.value = name;
		F.submit();
	}	
}

function All_Clear_Upnp_Mainform(fm)
{
	var F = document.portforward_fm;
	var doc = parent.document;
	
	if(fm)	F = fm;

	DisableObj(F.rule_name);	F.rule_name.value = '';
	DisableObj(F.sel_server);	F.sel_server.style.visibility = 'hidden';
	F.sel_server.value = 0;
	DisableObj(F.protocol);		F.protocol.value = 'tcp'; F.protocol.style.backgroundColor = '#eeeeee';
	DisableObj(F.ext_sport);	DisableObj(F.ext_eport);
	F.ext_sport.value = '';		F.ext_eport.value = '';
	DisableObj(F.internal_ip1);	DisableObj(F.internal_ip2);
	F.internal_ip1.value = '';	F.internal_ip2.value = '';
	DisableObj(F.internal_ip3);	DisableObj(F.internal_ip4);
	F.internal_ip3.value = '';	F.internal_ip4.value = '';
	DisableObj(F.re_ip);		F.re_ip.style.visibility = 'hidden';
	DisableObj(F.disable_rule);	F.disable_rule.style.visibility = 'hidden';
	DisableObj(F.int_sport);	F.int_sport.style.visibility = 'hidden';
	DisableObj(F.int_eport);	F.int_eport.style.visibility = 'hidden';
	DisableObj(F.forward_submit);	F.forward_submit.style.visibility = 'hidden';
	DisableObj(F.new_rule_btn);	F.new_rule_btn.style.visibility = 'hidden';
	DisableObj(F.modify_cancel);	F.modify_cancel.style.visibility = 'hidden';
	if(F.wan_name){DisableObj(F.wan_name);	F.wan_name.style.display = 'none';}
	var obj = doc.getElementById('disable_line');
	if(obj)	obj.style.visibility = 'hidden';
	obj = doc.getElementById('internal_line');
	if(obj)	obj.style.visibility = 'hidden';
	obj = doc.getElementById('current_ip_line');
	if(obj)	obj.style.visibility = 'hidden';
}

function All_Clear_Portforward_Mainform(fm)
{
	var F = document.portforward_fm;
	var doc = parent.document;

	if(fm)	F = fm;
	
	var obj = doc.getElementById('disable_line');
	if(obj)	obj.style.visibility = 'visible';
	obj = doc.getElementById('internal_line');
	if(obj)	obj.style.visibility = 'visible';
	obj = doc.getElementById('current_ip_line');
	if(obj)	obj.style.visibility = 'visible';

	All_Enable_Portforward_Mainform(F);
	F.disable_rule.checked = false;
	F.rule_name.value = '';
	F.sel_server.value = 0;
	F.protocol.value = 'tcp';
	F.int_sport.value = '';
	F.int_eport.value = '';
	F.ext_sport.value = '';
	F.ext_eport.value = '';
	F.act.value = '';
	DisableObj(F.modify_cancel);	F.modify_cancel.style.visibility = 'visible';
	F.forward_submit.value = PORTFORWARD_ADD_WORD;
	EnableObj(F.forward_submit);	F.forward_submit.style.visibility = 'visible';
	F.re_ip.checked = false;
	F.internal_ip4.value = '';
	F.rule_name.style.backgroundColor='';
	F.rule_name.readOnly = false;

	if(!fm){
		F.clicked_bg.value = '';
		F.clicked_name.value = '';
	}
}

function All_Enable_Portforward_Mainform(fm)
{
	var F = document.portforward_fm;

	if(fm)	F = fm;

	EnableObj(F.new_rule_btn);	F.new_rule_btn.style.visibility = 'visible';
	EnableObj(F.disable_rule);	F.disable_rule.style.visibility = 'visible';
	//EnableObj(F.forward_submit);	F.forward_submit.style.visibility = 'visible';
	if(F.act.value != 'modify'){
		EnableObj(F.rule_name);		F.rule_name.style.visibility = 'visible';
	}
	EnableObj(F.sel_server);	F.sel_server.style.visibility = 'visible'; F.sel_server.style.backgroundColor = '';
	EnableObj(F.protocol);		F.protocol.style.visibility = 'visible'; F.protocol.style.backgroundColor = '';
	if(F.protocol.value != 'gre'){
		EnableObj(F.int_sport);		F.int_sport.style.visibility = 'visible';
		EnableObj(F.int_eport);		F.int_eport.style.visibility = 'visible';
		EnableObj(F.ext_sport);		F.ext_sport.style.visibility = 'visible';
		EnableObj(F.ext_eport);		F.ext_eport.style.visibility = 'visible';
	}
	EnableObj(F.re_ip);		F.re_ip.style.visibility = 'visible';
	EnableObj(F.internal_ip1);	F.internal_ip1.visibility = 'visible';
	EnableObj(F.internal_ip2);	F.internal_ip2.visibility = 'visible';
	EnableObj(F.internal_ip3);	F.internal_ip3.visibility = 'visible';
	EnableObj(F.internal_ip4);	F.internal_ip4.visibility = 'visible';
	if(F.wan_name){EnableObj(F.wan_name);	F.wan_name.style.display = ''; F.wan_name.style.backgroundColor = '';}
}

function All_Disable_Portforward_Mainform(fm)
{
	var F = document.portforward_fm;

	if(fm)	F = fm;
	
	EnableObj(F.new_rule_btn);	F.new_rule_btn.style.visibility = 'visible';
	//EnableObj(F.forward_submit);	F.forward_submit.style.visibility = 'visible';
	if(F.act.value != 'modify'){
		DisableObj(F.rule_name);	F.rule_name.style.visibility = 'visible';
	}
	DisableObj(F.sel_server);	F.sel_server.style.visibility = 'visible'; F.sel_server.style.backgroundColor = '#eeeeee';
	DisableObj(F.protocol);		F.protocol.style.visibility = 'visible'; F.protocol.style.backgroundColor = '#eeeeee';
	DisableObj(F.int_sport);	F.int_sport.style.visibility = 'visible';
	DisableObj(F.int_eport);	F.int_eport.style.visibility = 'visible';
	DisableObj(F.ext_sport);	F.ext_sport.style.visibility = 'visible';
	DisableObj(F.ext_eport);	F.ext_eport.style.visibility = 'visible';
	DisableObj(F.re_ip);		F.re_ip.style.visibility = 'visible';
	DisableObj(F.internal_ip1);	F.internal_ip1.visibility = 'visible';
	DisableObj(F.internal_ip2);	F.internal_ip2.visibility = 'visible';
	DisableObj(F.internal_ip3);	F.internal_ip3.visibility = 'visible';
	DisableObj(F.internal_ip4);	F.internal_ip4.visibility = 'visible';
	if(F.wan_name){DisableObj(F.wan_name);	F.wan_name.style.display = ''; F.wan_name.style.backgroundColor = '#eeeeee';}
}

function ActivateRuleClicked()
{
	var F = document.portforward_fm;
	EnableObj(F.forward_submit);
	EnableObj(F.modify_cancel);
	if(F.disable_rule.checked){
		portforward_iframe.portforward_iframe_fm.actcheck.value = '0';
		All_Disable_Portforward_Mainform();
	}else{
		portforward_iframe.portforward_iframe_fm.actcheck.value = '1';
		All_Enable_Portforward_Mainform();
	}
	if(!F.new_rule_btn.disabled){
		DisableObj(F.new_rule_btn);
	}
}

function addPortForward_v2(max_count,gw_addr,netmask)
{
        var F = document.portforward_fm;
	var F2 = portforward_iframe.portforward_iframe_fm;
        var obj;

	obj = portforward_iframe.document.getElementById('_-new_line');
	if(!obj && (F.act.value == '' || F.act.value == 'add')){
		alert(PORTFORWARD_MAX_RULE_ALERT);
		return;
	}

	if(special_char_validate(F.rule_name.value)){
		alert(PORTFORWARD_RULE_NAME_INVALID);
                F.rule_name.focus();
                F.rule_name.select();
		return;
	}

	if(F.forward_submit.value != MODIFY_OP && portforward_iframe.document.getElementById(F.rule_name.value)){
		alert(PORTFORWARD_SAME_RULE_ALERT);
		F.rule_name.focus();
		F.rule_name.select();
		return;
	}

	if(gw_addr != '' && netmask != ''){
		var gwstrs = gw_addr.split('.');
		var maskstrs = netmask.split('.');
		var ipstrs = [parseInt(F.internal_ip1.value), parseInt(F.internal_ip2.value), parseInt(F.internal_ip3.value), parseInt(F.internal_ip4.value)];
		
		for(var i = 0; i < 4 ; i ++){
			if((parseInt(gwstrs[i]) & parseInt(maskstrs[i])) != (ipstrs[i] & parseInt(maskstrs[i]))){
				alert(NATCONF_PORTFORWARD_INVALID_INT_IP_ADDRESS);
				switch(i){
					case 0:	F.internal_ip1.focus();	F.internal_ip1.select(); break;
					case 1:	F.internal_ip2.focus();	F.internal_ip2.select(); break;
					case 2:	F.internal_ip3.focus();	F.internal_ip3.select(); break;
					case 3:	F.internal_ip4.focus();	F.internal_ip4.select(); break;
					default:	break;
				}
				return;
			}
		}

		var invertSubnet = [~parseInt(maskstrs[0]), ~parseInt(maskstrs[1]), ~parseInt(maskstrs[2]), ~parseInt(maskstrs[3])];
		
		if((((invertSubnet[0] | ipstrs[0]) & 0xFF) == ipstrs[0]) && (((invertSubnet[1] | ipstrs[1]) & 0xFF) == ipstrs[1]) && (((invertSubnet[2] | ipstrs[2]) & 0xFF) == ipstrs[2]) && (((invertSubnet[3] | ipstrs[3]) & 0xFF) == ipstrs[3])){
			alert(PORTFORWARD_BROD_IP_ALERT);
			F.internal_ip4.focus();	F.internal_ip4.select();
			return;
		}
		if((parseInt(gwstrs[0]) == ipstrs[0]) && (parseInt(gwstrs[1]) == ipstrs[1]) && (parseInt(gwstrs[2]) == ipstrs[2]) && (parseInt(gwstrs[3]) == ipstrs[3]))
		{
			alert(PORTFORWARD_INT_IP_ALERT);
			F.internal_ip4.focus();	F.internal_ip4.select();
			return;
		}
	}


        if (F.rule_count.value > max_count)
        { 
                alert(NATCONF_PORTFORWARD_NO_MORE_RULE); 
                return;
        }
        else if (F.rule_name.value == '')
        { 
                alert(MSG_RULE_NAME_IS_BLANK);
                F.rule_name.focus();
                F.rule_name.select();
                return;
        }
        else if (obj=CheckIPAllowLocalBroadcast('internal_ip'))
        {
                alert(NATCONF_PORTFORWARD_INVALID_INT_IP_ADDRESS);
                obj.focus();
                obj.select();
                return;
        }
        else if (F.protocol.disabled == false && F.protocol.value != 'gre')
        {
                if (F.ext_sport.value == '')
                {
                        alert(NATCONF_PORTFORWARD_EXT_PORT_IS_BLANK);
                        F.ext_sport.focus();
                        F.ext_sport.select();
                        return;
                }
                else if (checkRange(F.ext_sport.value, 1, 65535))
                {
                        alert(NATCONF_PORTFORWARD_INVALID_EXT_PORT);
                        F.ext_sport.focus();
                        F.ext_sport.select();
                        return;
                }
                else if (checkOptionalRange(F.ext_eport.value, 1, 65535) || !isInteger(F.ext_eport.value))
                {
                        alert(NATCONF_PORTFORWARD_INVALID_EXT_PORT);
                        F.ext_eport.focus();
                        F.ext_eport.select();
                        return;
                }
                else if ((F.ext_eport.value != '') && 
				(parseInt(F.ext_sport.value) > parseInt(F.ext_eport.value)))
                {
                        alert(NATCONF_PORTFORWARD_INVALID_EXT_PORT_RANGE);
                        F.ext_eport.focus();
                        F.ext_eport.select();
                        return;
                }
                else if (checkOptionalRange(F.int_sport.value, 1, 65535) || !isInteger(F.int_sport.value))
                {
                        alert(NATCONF_PORTFORWARD_INVALID_INT_PORT);
                        F.int_sport.focus();
                        F.int_sport.select();
                        return;
                }
                else if (checkOptionalRange(F.int_eport.value, 1, 65535) || !isInteger(F.int_eport.value))
                {
                        alert(NATCONF_PORTFORWARD_INVALID_INT_PORT);
                        F.int_eport.focus();
                        F.int_eport.select();
                        return;
                }
                else if ((F.int_eport.value != '') && 
				(parseInt(F.int_sport.value) > parseInt(F.int_eport.value)))
                {
                        alert(NATCONF_PORTFORWARD_INVALID_INT_PORT_RANGE);
                        F.int_eport.focus();
                        F.int_eport.select();
                        return;
                }
		else if(F.int_sport.value == '' && F.int_eport.value != ''){
                        alert(NATCONF_PORTFORWARD_INVALID_INT_PORT);
                        F.int_sport.focus();
                        F.int_sport.select();
			return;
		}
        }

	{
		if(F.act.value == '')
			F.act.value = 'add';
		F2.act.value = F.act.value;
		F2.rule_name.value = F.rule_name.value;
		F2.internal_ip.value = F.internal_ip1.value + '.' + F.internal_ip2.value + '.' + F.internal_ip3.value + '.' + F.internal_ip4.value;
		if(F.wan_name)
			F2.wan_name.value = F.wan_name.value;
		F2.int_sport.value = F.int_sport.value;
		F2.int_eport.value = F.int_eport.value;
		F2.ext_sport.value = F.ext_sport.value;
		F2.ext_eport.value = F.ext_eport.value;
		F2.protocol.value = F.protocol.value;
	}
	All_Clear_Portforward_Mainform();
        F2.submit();
}

function ResetPortForward_v2(){
	var doc = portforward_iframe || document.portforward_iframe;
	doc.onNewLineClicked();
}

function CancelPortForward_v2(){
	if(document.portforward_fm.clicked_name.value == '_-new_line'){
		All_Clear_Portforward_Mainform(document.portforward_fm);
		DisableObj(document.portforward_fm.new_rule_btn);
		return;
	}
	var doc = portforward_iframe.document || document.portforward_iframe.document;
	var obj = doc.getElementById(document.portforward_fm.clicked_name.value);
	if(obj)	obj.onclick();
}

function ClickedRule(obj){
	if(obj)
	{
		obj.style.backgroundColor='#C9D5E9';
	}
}

function rule_get_v2(name,proto,wan,iport1,iport2,ip1,ip2,ip3,ip4,oport1,oport2,mode,activated)
{
	var F = parent.document.portforward_fm || document.portforward_fm;
	var F2 = parent.document.portforward_iframe_fm || document.portforward_iframe_fm;
	
	if(mode == 'user'){
	All_Clear_Portforward_Mainform(F);
	var oObj,tObj;
	if(name == ''){	
		name = '_-new_line';
	}

	if(F.clicked_bg.value != '' && F.clicked_name.value != ''){
		oObj = document.getElementById(F.clicked_name.value) || parent.portforward_iframe.document.getElementById(F.clicked_name.value);
		if(!oObj){
			oObj = parent.upnp_iframe.document.getElementById(F.clicked_name.value);
				if(!oObj)	return;
		}
		oObj.style.backgroundColor=F.clicked_bg.value;
		tObj = document.getElementById(F.clicked_name.value+'_DELETE') || 
			parent.portforward_iframe.document.getElementById(F.clicked_name.value+'_DELETE');
		if(!tObj){
			if(F.clicked_name.value != '_-new_line')	tObj = parent.upnp_iframe.document.getElementById(F.clicked_name.value+'_DELETE');
		}
		if(tObj){tObj.style.display='none';}
		/*tObj = document.getElementById(F.clicked_name.value+'_WANID') || 
			parent.portforward_iframe.document.getElementById(F.clicked_name.value+'_WANID');
		if(!tObj){
			if(F.clicked_name.value != '_-new_line')	
				if(parent.upnp_iframe)
					tObj = parent.upnp_iframe.document.getElementById(F.clicked_name.value+'_WANID');
		}
		if(tObj){tObj.style.display='none';}*/
	}

	oObj = document.getElementById(name) || parent.portforward_iframe.document.getElementById(name);
	if(!oObj){
		F.clicked_bg.value = '';	F.clicked_name.value = '';
		All_Clear_Portforward_Mainform(F);	return;
	}	
	tObj = document.getElementById(name+'_DELETE') || parent.portforward_iframe.document.getElementById(name+'_DELETE');
	if(tObj){tObj.style.display='block';}
	//tObj = document.getElementById(name+'_WANID') || parent.portforward_iframe.document.getElementById(name+'_WANID');
	//if(tObj){tObj.style.display='inline-block';}

	F.clicked_bg.value = oObj.style.backgroundColor;
	F.clicked_name.value = name;
	ClickedRule(oObj);
	
	if(name == '_-new_line' && proto == ''){
		All_Clear_Portforward_Mainform(F);
		DisableObj(F.disable_rule);
		return;
	}
	EnableObj(F.disable_rule);

	F.rule_name.value = name;
	F.rule_name.readOnly = true;
	F.rule_name.style.backgroundColor="#CCCCCC";
	F.re_ip.checked = false;
	F.sel_server.value = 0;
	EnableObj(F.int_sport);	EnableObj(F.int_eport);
	EnableObj(F.ext_sport);	EnableObj(F.ext_eport);
	if (proto == 'tcp')
	{
		EnableObj(F.protocol);
		F.protocol.options[0].selected = true;
	}
	else if (proto == 'udp')
	{
		EnableObj(F.protocol); 
		F.protocol.options[1].selected = true;
	}
	else if (proto == 'tcpudp')
	{
		EnableObj(F.protocol); 
		F.protocol.options[2].selected = true;
	}
	else if (proto == 'gre')
	{
		EnableObj(F.protocol);
		F.protocol.options[3].selected = true;
		DisableObj(F.int_sport);	DisableObj(F.int_eport);
		DisableObj(F.ext_sport);	DisableObj(F.ext_eport);
	}

	if (F.wan_name)
	{
		if (wan == '1')
			F.wan_name.options[0].selected = true;
		else
			F.wan_name.options[1].selected = true;
	}

	if (iport1 != '0') 
		F.int_sport.value = iport1; 
	else 
		F.int_sport.value = '';
	if (iport1 != '0' && iport2 == '0') 
		F.int_eport.value = ''; 
	else if (iport2 != '0') 
		F.int_eport.value = iport2; 
	else 
		F.int_eport.value = '';
	F.internal_ip1.value = ip1; F.internal_ip2.value = ip2;
	F.internal_ip3.value = ip3; F.internal_ip4.value = ip4;
	if (oport1 != '0') 
		F.ext_sport.value = oport1; 
	else 
		F.ext_sport.value = '';
	if (oport1 != '0' && oport2 == '0') 
		F.ext_eport.value = ''; 
	else if (oport2 != '0') 
		F.ext_eport.value = oport2; 
	else 
		F.ext_eport.value = '';

	F.forward_submit.value = MODIFY_OP;
	F.act.value = 'modify';
	DisableObj(F.forward_submit);
	DisableObj(F.modify_cancel);

	if(activated == 0){
		F.disable_rule.checked = true;
		All_Disable_Portforward_Mainform(F);
		F2.actcheck.value = '0';
	}
	else{
		F.disable_rule.checked = false;
		All_Enable_Portforward_Mainform(F);
		F2.actcheck.value = '1';
	}

	}
	else if(mode == 'upnp')
	{
		var oObj,tObj;
		All_Clear_Upnp_Mainform(F);
		if(F.clicked_bg.value != '' && F.clicked_name.value != ''){
			oObj = document.getElementById(F.clicked_name.value) || parent.upnp_iframe.document.getElementById(F.clicked_name.value);
			if(!oObj){
				oObj = parent.portforward_iframe.document.getElementById(F.clicked_name.value);
					if(!oObj)	return;
			}
			oObj.style.backgroundColor=F.clicked_bg.value;
			tObj = document.getElementById(F.clicked_name.value+'_DELETE') || 
				parent.upnp_iframe.document.getElementById(F.clicked_name.value+'_DELETE');
			if(!tObj)	tObj = parent.portforward_iframe.document.getElementById(F.clicked_name.value+'_DELETE');
			if(tObj){tObj.style.display='none';}
			/*tObj = document.getElementById(F.clicked_name.value+'_WANID') || 
				parent.upnp_iframe.document.getElementById(F.clicked_name.value+'_WANID');
			if(!tObj){
				if(parent.portforward_iframe)
					tObj = parent.portforward_iframe.document.getElementById(F.clicked_name.value+'_WANID');
			}
			if(tObj){tObj.style.display='none';}*/
		}
	
		oObj = document.getElementById(name) || parent.upnp_iframe.document.getElementById(name);
		if(!oObj){
			F.clicked_bg.value = '';	F.clicked_name.value = '';
			All_Clear_Upnp_Mainform(F);	return;
		}	
		tObj = document.getElementById(name+'_DELETE') || parent.upnp_iframe.document.getElementById(name+'_DELETE');
		if(tObj){tObj.style.display='block';}
		//tObj = document.getElementById(name+'_WANID') || parent.upnp_iframe.document.getElementById(name+'_WANID');
		//if(tObj){tObj.style.display='inline-block';}
	
		F.clicked_bg.value = oObj.style.backgroundColor;
		F.clicked_name.value = name;
		ClickedRule(oObj);
		
		F.rule_name.value = name;
		if (proto == 'tcp')
			F.protocol.options[0].selected = true;
		else if (proto == 'udp')
			F.protocol.options[1].selected = true;
		if (F.wan_name)
		{
			if (wan == '1')
				F.wan_name.options[0].selected = true;
			else
				F.wan_name.options[1].selected = true;
		}
		F.internal_ip1.value = ip1; F.internal_ip2.value = ip2;
		F.internal_ip3.value = ip3; F.internal_ip4.value = ip4;
		if (oport1 != '0') 
			F.ext_sport.value = oport1; 
		else 
			F.ext_sport.value = '';
		if (oport1 != '0' && oport2 == '0') 
			F.ext_eport.value = ''; 
		else if (oport2 != '0') 
			F.ext_eport.value = oport2; 
		else 
			F.ext_eport.value = '';
	}
}

function onChangedValue(){
	var F = document.portforward_fm;

	if(F.protocol.value == 'gre'){
		F.int_sport.value = '';
		F.int_eport.value = '';
		F.ext_sport.value = '';
		F.ext_eport.value = '';
		DisableObj(F.int_sport);
		DisableObj(F.int_eport);
		DisableObj(F.ext_sport);
		DisableObj(F.ext_eport);
	}else{
		EnableObj(F.int_sport);
		EnableObj(F.int_eport);
		EnableObj(F.ext_sport);
		EnableObj(F.ext_eport);
	}

	if(F.forward_submit.disabled){
		EnableObj(F.forward_submit);
	}
	if(F.modify_cancel.disabled){
		EnableObj(F.modify_cancel);
	}
	if(!F.new_rule_btn.disabled){
		DisableObj(F.new_rule_btn);
	}
	return true;
}

function special_char_validate(str){
	var regExp = /[\{\}\[\]\/?;:|*~`!^+<>@\$%&\\\=\'\"]/gi

	return regExp.test(str);
}

function ClickLineCheck(e)
{
        if (!e) var e = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
}

function onChangedPfMenu(mode)
{
	var F = parent.document.portforward_fm || document.portforward_fm;
	
	if(mode == 'all'){
		F.mode.value = 'all';	F.submit();
	}
	else if(mode == 'user'){
		F.mode.value = 'user';	F.submit();
	}
	else if(mode == 'upnp'){
		F.mode.value = 'upnp';	F.submit();
	}
}

function Portforward_Restore()
{
	var F = restore_iframe.portforward_file_fm;
	if(F.pf_restore_file.value.length == 0){
		alert(PORTFORWARD_RESTORE_BLANK);
		return;
	}
	F.commit.value = 'pf_restore';
	MaskIt(document,'apply_mask');
	F.submit();
}

function onLoadCompleted(doc){
        var ifr = doc.restore_iframe || doc.getElementsByName('restore_iframe')[0];

        if(ifr){
                var idoc = ifr.document || ifr.contentWindow.document;
                if(!idoc)       return;
                var ifrm = idoc.portforward_file_fm;
                if(!ifrm)       return;
                var target = ifrm.saverulebtn;
                if(!target)     return;
                var tmp = parseInt(doc.portforward_fm.rule_count.value);

                if(tmp == 0){
                        DisableObj(target);
			target.style.backgroundColor = '#EEEEEE';
		}
                else{
                        EnableObj(target);
			target.style.backgroundColor = '';
		}
        }
}

</script>
