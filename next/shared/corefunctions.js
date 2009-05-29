<!--
/*
    document.write('<a HREF="javascript:document.write(location.href)">location.href</a>');
    document.write('<p>location.href: <u>' + location.href + "</u>");
*/

    if  (location.href.substring(0,21)=="http://216.239.39.104") {
        displayLanguage="fr";
    }
    else {
        displayLanguage="en";
    };



    if  (displayLanguage=="en") {
        prototype_en();
        header_en();
        menu_en();
    }
    else {
        prototype_fr();
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
	document.write('            Ce site Web de prototype subit une révision importante.');
	document.write('            En conséquence, quelques liens peuvent être cassés et quelques secteurs peuvent ne pas être disponibles encore.'); 
	document.write('            Veuillez agréer nos appologies pour le dérangement, et veuillez être patient avec nous tandis que nous travaillons des choses dehors.');
	document.write('            Le site Web officiel est encore disponible à <a href="http://www.emrg.ca">www.emrg.ca</a>.');
	document.write('            </font></b></i></center>');
	document.write('            <hr>');
}

function header_en() {
	document.write('<TABLE WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="2">');

	document.write('    <TR>');
	document.write('        <!-- Left Column Start -->');
	document.write('        <TD ALIGN="CENTER" WIDTH="160">');

	document.write('            <A title="Emergency Measures Radio Group Home Page"');
	document.write('             href="/next/index.htm"><IMG border="0" height="70" ');
	document.write('             src="shared/logoemrg_large.gif" nosave=""><br>EMRG Home Page</A>');

	document.write('        </TD>');
	document.write('        <!-- Left Column End -->');
	document.write('');
	document.write('        <!-- Centre Column Start -->');
	document.write('        <TD>');

	document.write('            <hr>');
	document.write('            <center>');
	document.write('            <FONT color="#006b3f" size="+1">');
	document.write('            <B>Emergency Measures Radio Group</B>');
	document.write('            </FONT>');
	document.write('            <BR>');
	document.write('            <FONT size="-1">');
	document.write('            <B>Ottawa ARES</B>');
	document.write('            <BR><i>');
	document.write('            Two Names, One Group, One Purpose');
	document.write("            <BR>Service de liaison radio en cas d'urgence");
	document.write('            </i>');
	document.write('            <BR>');
	document.write('            <FONT COLOR="#006b3f">');
	document.write('                Volunteer Emergency Radio Communications - Serving Ottawa Canada');
	document.write('            </FONT>');
	document.write('            </FONT>');
	document.write('            <hr>');
	document.write('            </center>');

	document.write('        </TD>');
	document.write('        <!-- Centre Column End -->');
	document.write('');
	document.write('        <!-- Right Column Start -->');

	document.write('        <TD ALIGN="CENTER" WIDTH="125">');
	document.write('            <A title="Radio Amateurs of Canada"');
	document.write('            href="http://www.rac.ca/">');
	document.write('            <IMG border="0" height="70"');
	document.write('            src="shared/logoares_large.jpg" nosave=""><br>RAC Home Page</A>');

	document.write('        <!-- Right Column End -->');
	document.write('    </TR>');

	document.write('</TABLE>');
}

function header_fr() {
	document.write('<TABLE WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="2">');

	document.write('    <TR>');
	document.write('        <!-- Left Column Start -->');
	document.write('        <TD ALIGN="CENTER" WIDTH="160">');

	document.write('            <A title="Home Page Par radio De Groupe De Mesures De Secours"');
	document.write('             href="/next/index.htm"><IMG border="0" height="70" ');
	document.write('             src="shared/logoemrg_large.gif" nosave=""><br>EMRG Home Page</A>');

	document.write('        </TD>');
	document.write('        <!-- Left Column End -->');
	document.write('');
	document.write('        <!-- Centre Column Start -->');
	document.write('        <TD>');

	document.write('            <hr>');
	document.write('            <center>');
	document.write('            <FONT color="#006b3f" size="+1">');
	document.write('            <B>Service de liaison radio en cas d\'urgence</B>');
	document.write('            </FONT>');
	document.write('            <BR>');
	document.write('            <FONT size="-1">');
	document.write('            <B>ARES Ottawa</B>');
	document.write('            <BR><i>');
	document.write('            Deux Noms, Un Groupe, Un But');
	document.write('            </i>');
	document.write('            <BR>');
	document.write('            <FONT COLOR="#006b3f">');
	document.write('                Communications par radio Volontaires De Secours - Portion Ottawa Canada');
	document.write('            </FONT>');
	document.write('            </FONT>');
	document.write('            <hr>');
	document.write('            </center>');

	document.write('        </TD>');
	document.write('        <!-- Centre Column End -->');
	document.write('');
	document.write('        <!-- Right Column Start -->');

	document.write('        <TD ALIGN="CENTER" WIDTH="125">');
	document.write('            <A title="Radio Amateurs du Canada"');
	document.write('            href="http://www.rac.ca/">');
	document.write('            <IMG border="0" height="70"');
	document.write('            src="shared/logoares_large.jpg" nosave=""><br>Radio Amateurs du Canada</A>');

	document.write('        <!-- Right Column End -->');
	document.write('    </TR>');

	document.write('</TABLE>');
}

function menu_en() {
	document.write('       	<div id="linkspace">');
	document.write('            <a class="menubar" HREF="index.htm">Home</a> | ');
	document.write('            <a class="menubar" HREF="contactus.htm">Contact Us</a> | ');
	document.write('            <a class="menubar" HREF="meetings.htm">Meetings</a> | ');
	document.write('            <a class="menubar" HREF="nl_index.htm">Newsletters</a> | ');
	document.write('            <a class="menubar" HREF="EMRG-000_official_documents_index.htm">Official Documents</a> | ');
	document.write('            <a class="menubar" HREF="photos.htm">Photos</a> | ');
	document.write('            <a class="menubar" HREF="maps.htm">Maps</a> | ');
	document.write('            <a class="menubar" HREF="list_server.htm">List Server</a> | ');
	document.write('            <a class="menubar" HREF="library.htm">Library</a> | ');
	document.write('            <a class="menubar" HREF="javascript:history.go(-1)">Back</a>');
	document.write('       	</div>');
}

function menu_fr() {
	document.write('       	<div id="linkspace">');
	document.write('            <a class="menubar" HREF="http://translate.google.com/translate?u=http%3A%2F%2Fwww.emrg.ca%2Fnext%2Findex.htm&langpair=en%7Cfr&hl=en&ie=UTF-8&oe=UTF-8&prev=%2Flanguage_tools">&Agrave; la maison</A> | ');
	document.write('            <a class="menubar" HREF="http://translate.google.com/translate?u=http%3A%2F%2Fwww.emrg.ca%2Fnext%2Fcontactus.htm&langpair=en%7Cfr&hl=en&ie=UTF-8&oe=UTF-8&prev=%2Flanguage_tools">Contactez-Nous</A> | ');
	document.write('            <a class="menubar" HREF="http://translate.google.com/translate?u=http%3A%2F%2Fwww.emrg.ca%2Fnext%2Fmeetings.htm&langpair=en%7Cfr&hl=en&ie=UTF-8&oe=UTF-8&prev=%2Flanguage_tools">R&eacute;unions</A> | ');
	document.write('            <a class="menubar" HREF="http://translate.google.com/translate?u=http%3A%2F%2Fwww.emrg.ca%2Fnext%2Fnl_index.htm&langpair=en%7Cfr&hl=en&ie=UTF-8&oe=UTF-8&prev=%2Flanguage_tools">Bulletins</A> | ');
	document.write('            <a class="menubar" HREF="http://translate.google.com/translate?u=http%3A%2F%2Fwww.emrg.ca%2Fnext%2FEMRG-000_official_documents_index.htm&langpair=en%7Cfr&hl=en&ie=UTF-8&oe=UTF-8&prev=%2Flanguage_tools">Documents Officiels</A> | ');
	document.write('            <a class="menubar" HREF="http://translate.google.com/translate?u=http%3A%2F%2Fwww.emrg.ca%2Fnext%2Fphotos.htm&langpair=en%7Cfr&hl=en&ie=UTF-8&oe=UTF-8&prev=%2Flanguage_tools">Photos</A> | ');
	document.write('            <a class="menubar" HREF="http://translate.google.com/translate?u=http%3A%2F%2Fwww.emrg.ca%2Fnext%2Fmaps.htm&langpair=en%7Cfr&hl=en&ie=UTF-8&oe=UTF-8&prev=%2Flanguage_tools">Cartes</A> | ');
	document.write('            <a class="menubar" HREF="http://translate.google.com/translate?u=http%3A%2F%2Fwww.emrg.ca%2Fnext%2Flist_server.htm&langpair=en%7Cfr&hl=en&ie=UTF-8&oe=UTF-8&prev=%2Flanguage_tools">Gestionnaire Listserv</A> | ');
	document.write('            <a class="menubar" HREF="http://translate.google.com/translate?u=http%3A%2F%2Fwww.emrg.ca%2Fnext%2Flibrary.htm&langpair=en%7Cfr&hl=en&ie=UTF-8&oe=UTF-8&prev=%2Flanguage_tools">Biblioth&egrave;que</A> | ');
	document.write('            <a class="menubar" HREF="javascript:history.go(-1)">Retour</a>');
	document.write('       	</div>');
}

function leavingEMRG() {
    if  (displayLanguage=="en") {
        alert("You are now leaving the Emergency Measures Radio Group's website. This link is provided solely for your convenience. The the Emergency Measures Radio Group is not responsible for the information found through it.");
    }
    else {
        alert("Vous laissez maintenant le website du groupe par radio de mesures de secours.  Ce lien est donné seulement pour votre convenance.  Le le groupe par radio de mesures de secours n'est pas responsable de l'information trouvée par elle.");
    };

}

function hello_world() {
	document.write("Hello World");
}

//spam_vaccine version 1.2 -- Courtesy of Radio Amateurs of Canada (RAC) 

function spam_vaccine( theHREFArray, theTextArray, theQBulletPath) {
	var theHREF, theText, extraAttributes ;
	extraAttributes = "";
	if( theHREFArray.length == 1 ) {
		theHREF = theHREFArray[0] ;
	}
	else if (theHREFArray.length > 1 ) {
		theHREF = "mailto:" + theHREFArray[0] + "@" + theHREFArray[2] + "." + theHREFArray[4] + theHREFArray[3] ;
		extraAttributes = theHREFArray[5];
	}
	else {
		theHREF = "";
	}
	
	if( theTextArray.length == 1 ) {
		theText = theTextArray[0];
	}
	else if (theTextArray.length> 1 ) {
		theText = theTextArray[1] + theTextArray[0] + "@" + theTextArray[2] + "." + theTextArray[4] + theTextArray[3] ;
	}
	else {
		theText = theHREFArray[0] + "@" + theHREFArray[2] + "." + theHREFArray[4] ;
	}

	if(theHREF) {
		theText = "<a href=\"" + theHREF + "\"" + extraAttributes + ">" + theText ;
		if(theQBulletPath) {
			theText += '<img width="14" height="10" border="0" align="absmiddle" hspace="1" alt="" src="' + theQBulletPath + 'mailto.gif">' ;
		}
		theText += "</a>";
	}
	document.write(theText);
}
-->
