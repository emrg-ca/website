<!--

var location_href=location.href;

parm1=location_href.indexOf('translate_c?hl=en');
parm2=location_href.indexOf('langpair=en');

if  (parm1>0 && parm2>0) {
	displayLanguage="fr";
}
else {
	displayLanguage="en";
};


if  (displayLanguage=="en") {
	translated_href=en2frURL(location_href);
/*	prototype_en();  */
	header_en();
	menu_en();
}
else {

	translated_href=fr2enURL(location_href);
/* 	prototype_fr(); */
	header_fr();
	menu_fr();
};

function prototype_en() {
	document.write('            <hr>');
	document.write('            <center><i><b><font color="red" size="2">');
	document.write('            This prototype web site is undergoing a major overhaul.');
	document.write('            As a result, some links may be broken and some areas may not be available yet.'); 
	document.write('            Please accept our appologies for the inconvenience,');
	document.write('            and please be patient with us while we work things out.');
	document.write('            The official web site is still available at <a href="http://www.emrg.ca">www.emrg.ca</a>.');
	document.write('            </font></b></i></center>');
	document.write('            <hr>');
}

function prototype_fr() {
	document.write('            <hr>');
	document.write('            <center><i><b><font color="red" size="2">');
	document.write('            Ce site Web de prototype subit une r&eacute;vision importante.');
	document.write('            En cons&eacute;quence, quelques liens peuvent&ecirc;tre cass&eacute;s et quelques secteurs peuvent ne pas&ecirc;tre disponibles encore.'); 
	document.write('            Veuillez agr&eacute;er nos appologies pour le d&eacute;rangement, et veuillez&ecirc;tre patient avec nous tandis que nous travaillons des choses dehors.');
	document.write('            Le site Web officiel est encore disponible à <a href="http://www.emrg.ca">www.emrg.ca</a>.');
	document.write('            </font></b></i></center>');
	document.write('            <hr>');
}

function header_en() {
	document.write('<table width="100%" border="0" cellspacing="0" cellpadding="2">');

	document.write('    <tr>');
	document.write('        <!-- Left Column Start -->');
	document.write('        <td align="center" width="160">');

	document.write('            <A title="Emergency Measures Radio Group Home Page"');
	document.write('             href="index.htm"><IMG border="0" height="70" ');
	document.write('             src="shared/logoemrg_large.gif"/><br/>EMRG Home Page</A>');

	document.write('        </td>');
	document.write('        <!-- Left Column End -->');
	document.write('');
	document.write('        <!-- Centre Column Start -->');
	document.write('        <td>');

	document.write('            <hr>');
	document.write('            <center>');
	document.write('            <font color="#006b3f" size="+1">');
	document.write('            <b>Emergency Measures Radio Group</b>');
	document.write('            </font>');
	document.write('            <br/>');
	document.write('            <font size="-1">');
	document.write('            <b>Ottawa ARES</b>');
	document.write('            <br/><i>');
	document.write('            Two Names, One Group, One Purpose');
	document.write("            <br/>Service de liaison radio en cas d'urgence");
	document.write('            </i>');
	document.write('            <br/>');
	document.write('            <font color="#006b3f">');
	document.write('                Volunteer Emergency Radio Communications - Serving Ottawa Canada');
	document.write('            </font>');
	document.write('            </font>');
	document.write('            <hr>');
	document.write('            </center>');

	document.write('        </td>');
	document.write('        <!-- Centre Column End -->');
	document.write('');
	document.write('        <!-- Right Column Start -->');

	document.write('        <td align="center" width="125">');
	document.write('            <A title="Radio Amateurs of Canada"');
	document.write('            href="external_url.htm?http://www.rac.ca/">');
	document.write('            <IMG border="0" height="70"');
	document.write('            src="shared/logoares_large.jpg" /><br/>RAC Home Page</A>');

	document.write('        <!-- Right Column End -->');
	document.write('    </tr>');

	document.write('</table>');
}

function header_fr() {
	document.write('<table width="100%" border="0" cellspacing="0" cellpadding="2">');

	document.write('    <tr>');
	document.write('        <!-- Left Column Start -->');
	document.write('        <td align="center" width="160">');

	document.write('            <A title="Home Page Par radio De Groupe De Mesures De Secours"');
	document.write('             href="index.htm"><IMG border="0" height="70" ');
	document.write('             src="shared/logoemrg_large.gif" /><br/>EMRG Home Page</A>');

	document.write('        </td>');
	document.write('        <!-- Left Column End -->');
	document.write('');
	document.write('        <!-- Centre Column Start -->');
	document.write('        <td>');

	document.write('            <hr>');
	document.write('            <center>');
	document.write('            <font color="#006b3f" size="+1">');
	document.write('            <b>Service de liaison radio en cas d\'urgence</b>');
	document.write('            </font>');
	document.write('            <br/>');
	document.write('            <font size="-1">');
	document.write('            <b>ARES Ottawa</b>');
	document.write('            <br/><i>');
	document.write('            Deux Noms, Un Groupe, Un But');
	document.write('            </i>');
	document.write('            <br/>');
	document.write('            <font color="#006b3f">');
	document.write('                Communications par radio Volontaires De Secours - Portion Ottawa Canada');
	document.write('            </font>');
	document.write('            </font>');
	document.write('            <hr>');
	document.write('            </center>');

	document.write('        </td>');
	document.write('        <!-- Centre Column End -->');
	document.write('');
	document.write('        <!-- Right Column Start -->');

	document.write('        <td align="center" width="125">');
	document.write('            <A title="Radio Amateurs du Canada"');
	document.write('            href="external_url.htm?http://www.rac.ca/">');
	document.write('            <IMG border="0" height="70"');
	document.write('            src="shared/logoares_large.jpg" /><br/>Radio Amateurs du Canada</A>');

	document.write('        <!-- Right Column End -->');
	document.write('    </tr>');

	document.write('</table>');
}

function menu_en() {
	document.write('       	<div id="linkspace">');
	document.write('            <a class="menubar" target="_top" href="' + translated_href + '">Fran&ccedil;ais</a> | ');
	document.write('            <a class="menubar" href="index.htm">Home</a> | ');
	document.write('            <a class="menubar" href="contactus.htm">Contact Us</a> | ');
	document.write('            <a class="menubar" href="services.htm">Services</a> | ');
	document.write('            <a class="menubar" href="meeting_general.htm">Meetings</a> | ');
	document.write('            <a class="menubar" href="external_url.htm?http://www.weatheroffice.ec.gc.ca/city/pages/on-118_metric_e.html">Weather Forecast</a> | ');
	document.write('            <a class="menubar" href="library.htm">Library</a> | ');
	document.write('            <a class="menubar" href="search.htm">Search</a>');
	document.write('       	</div>');
}

function menu_fr() {
	document.write('       	<div id="linkspace">');
	document.write('            <a class="menubar" target="_top" href="' + translated_href + '">English</a> | ');
	document.write('            <a class="menubar" target="_top" href="http://translate.google.com/translate?u=http%3A%2F%2Fwww.emrg.ca%2Findex.htm&langpair=en%7Cfr&hl=en&ie=UTF-8&oe=UTF-8&prev=%2Flanguage_tools">&Agrave; la maison</A> | ');
	document.write('            <a class="menubar" target="_top" href="http://translate.google.com/translate?u=http%3A%2F%2Fwww.emrg.ca%2Fcontactus.htm&langpair=en%7Cfr&hl=en&ie=UTF-8&oe=UTF-8&prev=%2Flanguage_tools">Contactez-Nous</A> | ');
	document.write('            <a class="menubar" target="_top" href="http://translate.google.com/translate?u=http%3A%2F%2Fwww.emrg.ca%2Fservices.htm&langpair=en%7Cfr&hl=en&ie=UTF-8&oe=UTF-8&prev=%2Flanguage_tools">Services</A> | ');
	document.write('            <a class="menubar" target="_top" href="http://translate.google.com/translate?u=http%3A%2F%2Fwww.emrg.ca%2Fmeeting_general.htm&langpair=en%7Cfr&hl=en&ie=UTF-8&oe=UTF-8&prev=%2Flanguage_tools">R&eacute;unions</A> | ');
	document.write('            <a class="menubar" href="external_url.htm?http://www.weatheroffice.ec.gc.ca/city/pages/on-118_metric_f.html">pr&eacute;visions m&eacute;t&eacute;orologiques</a> | ');
	document.write('            <a class="menubar" target="_top" href="http://translate.google.com/translate?u=http%3A%2F%2Fwww.emrg.ca%2Flibrary.htm&langpair=en%7Cfr&hl=en&ie=UTF-8&oe=UTF-8&prev=%2Flanguage_tools">Biblioth&egrave;que</A> | ');
	document.write('            <a class="menubar" target="_top" href="http://translate.google.com/translate?u=http%3A%2F%2Fwww.emrg.ca%2Fsearch.htm&langpair=en%7Cfr&hl=en&ie=UTF-8&oe=UTF-8&prev=%2Flanguage_tools">Recherche</A>');
	document.write('       	</div>');
}

function en2frURL(URL_en) {
	encoded_URL1 = URL_en.replace(/:/g, "%3A");
	encoded_URL2 = encoded_URL1.replace(/\//g, "%2F");
	URL_fr = "http://translate.google.com/translate?u=" + encoded_URL2 + "&langpair=en%7Cfr&hl=en&ie=UTF-8&oe=UTF-8&prev=%2Flanguage_tools";
	return(URL_fr);
}

function fr2enURL(URL_fr) {
	form_info=createRequestObject(URL_fr);
	var URL_en=form_info['u'];
	return(URL_en);
}

function createRequestObject(passed_href) {

	TEMP_FORM_DATA = new Object();
	// The Object ("Array") where our data will be stored.

	separator = ',';
	// The token used to separate data from multi-select inputs

	query = '' + passed_href;

	qu = query

	// Get the current URL so we can parse out the data.
	// Adding a null-string '' forces an implicit type cast
	// from property to string, for NS2 compatibility.

	query = query.substring((query.indexOf('?')) + 1);
	// Keep everything after the question mark '?'.

	if (query.length < 1) { return false; }  // Perhaps we got some bad data?

	keypairs = new Object();
	numKP = 1;
	// Local vars used to store and keep track of name/value pairs
	// as we parse them back into a usable form.

	while (query.indexOf('&') > -1) {
		keypairs[numKP] = query.substring(0,query.indexOf('&'));
		query = query.substring((query.indexOf('&')) + 1);
		numKP++;
		// Split the query string at each '&', storing the left-hand side
		// of the split in a new keypairs[] holder, and chopping the query
		// so that it gets the value of the right-hand string.
	}

	keypairs[numKP] = query;
	// Store what's left in the query string as the final keypairs[] data.<

	for (i in keypairs) {
		keyName = keypairs[i].substring(0,keypairs[i].indexOf('='));

		// Left of '=' is name.
		keyValue = keypairs[i].substring((keypairs[i].indexOf('=')) + 1);

		// Right of '=' is value.
		while (keyValue.indexOf('+') > -1) {
			keyValue = keyValue.substring(0,keyValue.indexOf('+')) + ' ' + keyValue.substring(keyValue.indexOf('+') + 1);
			// Replace each '+' in data string with a space.
		}

		keyValue = unescape(keyValue);
		// Unescape non-alphanumerics

		if (TEMP_FORM_DATA[keyName]) {
			TEMP_FORM_DATA[keyName] = TEMP_FORM_DATA[keyName] + separator + keyValue;
			// Object already exists, it is probably a multi-select input,
			// and we need to generate a separator-delimited string
			// by appending to what we already have stored.
		} else {
			TEMP_FORM_DATA[keyName] = keyValue;
			// Normal case: name gets value.
		}

	}

	return(TEMP_FORM_DATA);
}

function leavingEMRG() {
	if  (displayLanguage=="en") {
		alert("You are now leaving the Emergency Measures Radio Group's website. This link is provided solely for your convenience. The the Emergency Measures Radio Group is not responsible for the information found through it.");
	}
	else {
		alert("Vous laissez maintenant le website du groupe par radio de mesures de secours.  Ce lien est donn&eacute; seulement pour votre convenance.  Le le groupe par radio de mesures de secours n'est pas responsable de l'information trouv&eacute;e par elle.");
	};
}

function hello_world() {
	document.write("Hello World");
}

//spam_vaccine version 1.2 -- Courtesy of Radio Amateurs of Canada (RAC) 

function spam_vaccine( thehrefArray, theTextArray, theQBulletPath) {
	var thehref, theText, extraAttributes ;
	extraAttributes = "";
	if( thehrefArray.length == 1 ) {
		thehref = thehrefArray[0] ;
	}
	else if (thehrefArray.length > 1 ) {
		thehref = "mailto:" + thehrefArray[0] + "@" + thehrefArray[2] + "." + thehrefArray[4] + thehrefArray[3] ;
		extraAttributes = thehrefArray[5];
	}
	else {
		thehref = "";
	}
	
	if( theTextArray.length == 1 ) {
		theText = theTextArray[0];
	}
	else if (theTextArray.length> 1 ) {
		theText = theTextArray[1] + theTextArray[0] + "@" + theTextArray[2] + "." + theTextArray[4] + theTextArray[3] ;
	}
	else {
		theText = thehrefArray[0] + "@" + thehrefArray[2] + "." + thehrefArray[4] ;
	}

	if(thehref) {
		theText = "<a href=\"" + thehref + "\"" + extraAttributes + ">" + theText ;
		if(theQBulletPath) {
			theText += '<img width="14" height="10" border="0" align="absmiddle" hspace="1" alt="" src="' + theQBulletPath + 'mailto.gif">' ;
		}
		theText += "</a>";
	}
	document.write(theText);
}

function setEventReminder(p_YYYY, p_MM, p_DD, p_HH, p_SS)
{
	//Set the two dates
	today=new Date()

	// format of Date is (YYYY, MM, DD, HH, MM) where Month is 0-11 in JavaScript
	eventDate=new Date(p_YYYY, p_MM-1, p_DD, p_HH, p_SS) 

	//Calculate 1 day in milliseconds
	var one_day_in_ms=1000*60*60*24

	//Calculate difference btw the two dates (in milliseconds), and convert to days
	numberOfDaysToEvent=Math.ceil((eventDate.getTime()-today.getTime())/(one_day_in_ms));

	if (numberOfDaysToEvent >= 0) {
		if  (numberOfDaysToEvent == 0) {
			eventDate="TODAY"
		}

		if (numberOfDaysToEvent==1) {
			eventDate="TOMORROW"
		}
	}
	else {
		eventDate=""
	}
}

-->
